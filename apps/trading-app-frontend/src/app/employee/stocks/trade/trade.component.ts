import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';
import { tradeActionValidator } from '../../../shared/validators/tradeActionValidator';
import { StockService } from '../../../shared/services/stock/stock.service';

export type TradeAction = 'buy' | 'sell';

@Component({
  selector: 'trading-app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TradeComponent implements OnInit, OnDestroy {
  error = false;
  errorMessage = '';
  subscriptions: Subscription[] = [];
  tradeStockForm: FormGroup = new FormGroup({});
  action?: TradeAction;
  symbol?: string;
  controls = {
    amount: ['', [Validators.required, Validators.minLength(1)]],
    action: ['', [Validators.required, tradeActionValidator()]]
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private stockService: StockService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams
        .subscribe(params => {
            console.log("the params are: ", params);
            this.action = params.action;
            this.symbol = params.symbol;
            console.log(this.action);
          }
        )
    );
    this.tradeStockForm = this.fb.group(this.controls);
  }

  onSubmit() {
    this.subscriptions.push(this.stockService
      .mockTradeStock$(
        this.userService.user,
        this.symbol!,
        this.tradeStockForm.value.amount,
        this.tradeStockForm.value.action
      )
      .subscribe(
        (response) => {
          this.router.navigate(['employee/home']).then();
        },
        (error) => {
          this.error = true;
          this.errorMessage = error;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onCancel() {
    this.tradeStockForm.reset();
  }
}
