import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../shared/services/user/user.service';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../shared/services/navigation/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trading-app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})
export class DisplayUserComponent implements OnInit {
  subscriptions = new Subscription();
  users: User[] = [];
  tableHeadings = ['User Id', 'First Name', 'Last Name'];

  constructor(
    private userService: UserService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/employee/users') {
      this.subscriptions = this.userService
        .mockFetchAllUsers$()
        .subscribe((users) => (this.users = users));
    } else {
      this.users = this.userService.users;
    }
  }

  onCancel() {
    this.navigationService.navigateToEmployeeHome();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  goToDepot(user: User) {
    this.userService.user = user;
    this.router.navigate([`employee/view-depot/${user.userId}`]).then();
  }
}
