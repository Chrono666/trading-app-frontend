import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trading-app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = 0;
  subscriptions = new Subscription();

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'BUY',
        link: 'buy',
        index: 0,
      },
      {
        label: 'SELL',
        link: 'sell',
        index: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.subscriptions = this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
