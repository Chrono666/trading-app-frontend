import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-view-stocks',
  templateUrl: './view-stocks.component.html',
  styleUrls: ['./view-stocks.component.scss']
})
export class ViewStocksComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.navigationService.navigateTo('employee/home')
  }

}
