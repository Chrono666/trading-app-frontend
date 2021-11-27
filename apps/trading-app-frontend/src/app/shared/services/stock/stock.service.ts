import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from '../../../models/stock.model';
import stockMock from '../../../mock-data/stockMock.json';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  backendURL = '';

  constructor(private http: HttpClient) {}

  mockSellStock$(user: User, symbol: string, amount: string) {
    console.log(`sold ${amount} pieces of ${symbol}`);
  }

  mockBuyStock$(user: User, symbol: string, amount: string) {
    console.log(`sold ${amount} pieces of ${symbol}`);
  }

  mockGetStocks$(): Observable<any> {
    return of(stockMock);
  }

  getStocks$(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.backendURL);
  }
}
