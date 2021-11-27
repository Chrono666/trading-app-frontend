import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StockService } from '../../shared/services/stock/stock.service';
import { NavigationService } from '../../shared/services/navigation/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { DepotStock } from '../../models/depot-stock.model';
import { User } from '../../models/user.model';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'trading-app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss'],
})
export class DepotComponent implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject<any>();
  depot!: DepotStock[];
  user!: User;

  tableHeadings = [
    'Symbol',
    'Company',
    'Price Bought',
    'Amount'
  ];

  constructor(
    private stockService: StockService,
    private userService: UserService,
    private navigationService: NavigationService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.getUserDepot(this.user);
    console.log(this.depot);
  }

  getUserDepot(user: User) {
    if (user) {
      this.routes.url.subscribe((urlSegment) =>
        urlSegment.forEach((segment) => {
          if (segment.path === this.user.userId) {
            this.stockService
              .mockGetUserDepot$()
              .pipe(takeUntil(this.ngUnsubscribe))
              .subscribe((userDepot) => (this.depot = userDepot));
          }
        })
      );
    }
  }

  ngOnDestroy() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onCancel() {
    this.navigationService.navigateToEmployeeHome();
  }
}
