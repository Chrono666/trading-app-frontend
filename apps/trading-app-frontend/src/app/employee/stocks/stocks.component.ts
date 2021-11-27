import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StockService } from '../../shared/services/stock/stock.service';
import { Stock } from '../../models/stock.model';
import { NavigationService } from '../../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  subscriptions = new Subscription();
  stocks: Stock[] = [];

  tableHeadings = [
    'Symbol',
    'Company',
    'Floating Stock Number',
    'Last Trade Time',
    'Last Trade Price',
    'Name Stock Exchange',
    'Market Capitalization'
  ];

  constructor(
    private stockService: StockService,
    private navigationService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions = this.stockService.mockGetStocks$().subscribe((s) => {
      this.stocks = s;
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onCancel() {
    this.navigationService.navigateToEmployeeHome();
  }

  goToPage(path: string, query: any) {
    this.navigationService.navigateTo(path, query);
  }
}
