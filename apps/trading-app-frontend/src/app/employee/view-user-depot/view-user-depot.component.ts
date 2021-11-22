import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'trading-app-view-user-depot',
  templateUrl: './view-user-depot.component.html',
  styleUrls: ['./view-user-depot.component.scss']
})
export class ViewUserDepotComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.navigationService.navigateTo('employee/home')
  }
}
