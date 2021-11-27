import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './user/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './user/create/create-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { StocksComponent } from './stocks/stocks.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DisplayUserComponent } from './user/display-user/display-user.component';
import { DepotComponent } from './user/depot/depot.component';
import { TradeComponent } from './stocks/trade/trade.component';
import { BankVolumeComponent } from './bank-volume/bank-volume.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create',
        component: CreateUserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'search',
        component: SearchUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: DisplayUserComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'stocks',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'trade',
        component: TradeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: StocksComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'depot',
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: DepotComponent
      }
    ]
  },
  {
    path: 'bank-volume',
    component: BankVolumeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
