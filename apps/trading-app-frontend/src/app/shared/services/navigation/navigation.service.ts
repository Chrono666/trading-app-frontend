import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigateTo(path: string, query?: any) {
    this.router.navigate([path], { queryParams: query }).then();
  }

  navigateToEmployeeHome() {
    this.router.navigate(['home']).then();
  }
}
