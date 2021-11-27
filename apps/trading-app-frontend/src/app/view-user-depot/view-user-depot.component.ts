import { Component } from '@angular/core';
import { NavigationService } from '../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-view-user-depot',
  templateUrl: './view-user-depot.component.html',
  styleUrls: ['./view-user-depot.component.scss']
})
export class ViewUserDepotComponent {

  constructor(private navigationService: NavigationService) { }

}
