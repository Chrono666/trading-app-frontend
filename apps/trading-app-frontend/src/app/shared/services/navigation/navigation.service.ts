import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateTo(path: string) {
    this.router.navigate([path]).then();
  }

  navigateToEmployeeHome() {
    this.router.navigate(['employee/home']).then();
  }
}
