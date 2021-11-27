import { Component } from '@angular/core';
import { NavigationService } from '../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-employee-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menuOptions = [
    {
      title: 'View Available Stocks',
      path: '/stocks',
    },
    {
      title: 'Display Users',
      path: '/users',
    },
    {
      title: 'Create User',
      path: '/users/create',
    },
    {
      title: 'Search User',
      path: '/users/search',
    },
    {
      title: 'Current Volume of the Bank',
      path: '/bank-volume',
    },
  ];

  constructor(private navigationService: NavigationService) {}

  navigateTo(index: number) {
    this.navigationService.navigateTo(this.menuOptions[index].path);
  }
}
