import { AuthService } from '../services/auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.authenticated) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
}
