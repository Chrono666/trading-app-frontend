import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './user/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './user/create/create-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { KeysPipe } from './shared/pipes/keys.pipe';
import { FormatTextPipe } from './shared/pipes/format-text.pipe';
import { StocksComponent } from './stocks/stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DisplayUserComponent } from './user/display-user/display-user.component';
import { DepotComponent } from './user/depot/depot.component';
import { TradeComponent } from './stocks/trade/trade.component';
import { BankVolumeComponent } from './bank-volume/bank-volume.component';
import { SearchComponent } from './stocks/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    CreateUserComponent,
    SearchUserComponent,
    KeysPipe,
    FormatTextPipe,
    StocksComponent,
    HeaderComponent,
    ModalComponent,
    DisplayUserComponent,
    DepotComponent,
    TradeComponent,
    BankVolumeComponent,
    SearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
