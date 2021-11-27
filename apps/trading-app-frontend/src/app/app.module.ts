import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { CreateUserComponent } from './employee/create-user/create-user.component';
import { SearchUserComponent } from './employee/search-user/search-user.component';
import { ViewUserDepotComponent } from './view-user-depot/view-user-depot.component';
import { KeysPipe } from './shared/pipes/keys.pipe';
import { FormatTextPipe } from './shared/pipes/format-text.pipe';
import { StocksComponent } from './employee/stocks/stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DisplayUserComponent } from './employee/display-user/display-user.component';
import { DepotComponent } from './view-user-depot/depot/depot.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmployeeHomeComponent,
    CreateUserComponent,
    SearchUserComponent,
    ViewUserDepotComponent,
    KeysPipe,
    FormatTextPipe,
    StocksComponent,
    HeaderComponent,
    ModalComponent,
    DisplayUserComponent,
    DepotComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
