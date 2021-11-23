import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import employeeMock from '../../../mock-data/employeeMock.json';
import { NavigationService } from '../navigation/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  backendUrl = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  mockSignIn$(userId: string, userPassword: string): Observable<User> {
    return of(employeeMock);
  }

  signIn$(userId: string, userPassword: string): Observable<User> {
    return this.http.get<User>(this.backendUrl, {
      headers: new HttpHeaders({ userId: userId, userPassword: userPassword }),
    });
  }

  //TODO: end session for user
  logout(user: User) {
    this.authService.authenticated = false;
    this.navigationService.navigateTo('auth')
  }
}
