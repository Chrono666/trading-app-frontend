import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss'],
})
export class EmployeeHomeComponent {
  menuOptions = [
    {
      title: 'View Available Stocks',
      path: 'employee/stocks',
    },
    {
      title: 'Display Users',
      path: 'employee/users',
    },
    {
      title: 'Create User',
      path: 'employee/create-user',
    },
    {
      title: 'Search User',
      path: 'employee/search-user',
    },
  ];

  constructor(private navigationService: NavigationService) {}

  navigateTo(index: number) {
    this.navigationService.navigateTo(this.menuOptions[index].path);
  }
}
