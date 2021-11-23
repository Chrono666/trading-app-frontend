import { Component, OnInit } from '@angular/core';
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
      path: 'employee/available-stocks',
    },
    {
      title: 'Create User',
      path: 'employee/create-user',
    },
    {
      title: 'Search User',
      path: 'employee/search-user',
    },
    {
      title: 'Buy/Sell Stocks For User',
      path: 'employee/stocks',
    },
    {
      title: 'View Depot of User',
      path: 'employee/view-depot',
    },
  ];

  constructor(private navigationService: NavigationService) {}


  navigateTo(index: number) {
    this.navigationService.navigateTo(this.menuOptions[index].path);
  }
}
