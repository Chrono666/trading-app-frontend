import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { CreateUserComponent } from './employee/create-user/create-user.component';
import { SearchUserComponent } from './employee/search-user/search-user.component';
import { ViewStocksComponent } from './employee/view-stocks/view-stocks.component';
import { BuyStocksComponent } from './employee/buy-stocks/buy-stocks.component';
import { SellStocksComponent } from './employee/sell-stocks/sell-stocks.component';
import { ViewUserDepotComponent } from './employee/view-user-depot/view-user-depot.component';
import { KeysPipe } from './shared/pipes/keys.pipe';
import { FormatTextPipe } from './shared/pipes/format-text.pipe';
import { StocksComponent } from './employee/stocks/stocks.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, EmployeeHomeComponent, CreateUserComponent, SearchUserComponent, ViewStocksComponent, BuyStocksComponent, SellStocksComponent, ViewUserDepotComponent, KeysPipe, FormatTextPipe, StocksComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
