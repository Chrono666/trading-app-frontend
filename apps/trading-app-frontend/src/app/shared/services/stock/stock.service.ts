import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Stock } from '../../../models/stock.model';
import stockMock from '../../../mock-data/stockMock.json';
import depotMock from '../../../mock-data/depotMock.json';
import { DepotStock } from '../../../models/depot-stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  backendURL = '';

  constructor(private http: HttpClient) {
  }

  mockSellStock$(user: User, symbol: string, amount: string) {
    console.log(`sold ${amount} pieces of ${symbol}`);
  }

  mockBuyStock$(user: User, symbol: string, amount: string) {
    console.log(`sold ${amount} pieces of ${symbol}`);
  }

  mockTradeStock$(user: User, symbol: string, amount: string, action: 'buy' | 'sell') {
    console.log(`${action} ${amount} pieces of ${symbol}`);
    return of({ value: {}, error: {} });
  }

  mockGetStocks$(): Observable<any> {
    return of(stockMock);
  }

  mockGetUserDepot$(): Observable<any> {
    return of(depotMock);
  }

  getStocks$(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.backendURL);
  }

  getUserDepot$(user: User): Observable<DepotStock> {
    return this.http.get<DepotStock>(this.backendURL, {
      headers: new HttpHeaders({ userId: JSON.stringify(user.userId) }),
    });
  }
}
