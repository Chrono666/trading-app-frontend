import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { CreateUserComponent } from './employee/create-user/create-user.component';
import { SearchUserComponent } from './employee/search-user/search-user.component';
import { StocksComponent } from './stocks/stocks.component';
import { ViewUserDepotComponent } from './view-user-depot/view-user-depot.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DisplayUserComponent } from './employee/display-user/display-user.component';
import { DepotComponent } from './view-user-depot/depot/depot.component';
import { TradeComponent } from './employee/stocks/trade/trade.component';
import { BankVolumeComponent } from './employee/bank-volume/bank-volume.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'employee',
    children: [
      {
        path: 'trade',
        component: TradeComponent,
        canActivate: [],
      },
      {
        path: 'home',
        component: EmployeeHomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'search-user',
        component: SearchUserComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'users',
            component: DisplayUserComponent,
          },
        ],
      },
      {
        path: 'stocks',
        component: StocksComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view-depot',
        component: ViewUserDepotComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: DepotComponent,
          },
        ],
      },
      {
        path: 'users',
        component: DisplayUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'bank-volume',
        component: BankVolumeComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
