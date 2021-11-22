import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { ViewStocksComponent } from './employee/view-stocks/view-stocks.component';
import { CreateUserComponent } from './employee/create-user/create-user.component';
import { SearchUserComponent } from './employee/search-user/search-user.component';
import { BuyStocksComponent } from './employee/buy-stocks/buy-stocks.component';
import { SellStocksComponent } from './employee/sell-stocks/sell-stocks.component';
import { StocksComponent } from './employee/stocks/stocks.component';
import { ViewUserDepotComponent } from './employee/view-user-depot/view-user-depot.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'employee',
    children: [
      { path: 'home', component: EmployeeHomeComponent },
      { path: 'available-stocks', component: ViewStocksComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'search-user', component: SearchUserComponent },
      {
        path: 'stocks',
        component: StocksComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'buy'},
          { path: 'buy', component: BuyStocksComponent },
          { path: 'sell', component: SellStocksComponent },
        ],
      },
      { path: 'view-depot', component: ViewUserDepotComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
