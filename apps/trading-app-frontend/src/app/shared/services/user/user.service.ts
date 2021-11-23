import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { map, Observable, of } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import customerMock from '../../../mock-data/customerMock.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'backendURL';
  user: User = {};

  constructor(private http: HttpClient) {}

  //TODO: faulty logic but user selection should happen in backend
  //TODO: backend should also return error msg if no user exists
  mockFetchUsers$(user: User): Observable<User[]> {
    console.log('User: ', user);
    return of(customerMock as User[]).pipe(
      map((response: User[]) => {
        return response.filter(
          (u) =>
            u.userId === user.userId ||
            u.firstName === user.firstName ||
            u.lastName === user.lastName
        );
      })
    );
  }

  mockCreateNewUser$(user: User): Observable<any> {
    console.log('User:', user);
    return of('new user was created')
  }

  fetchUsers$(user: User): Observable<User[]> {
    return this.http.get<User[]>(this.url, {
      headers: new HttpHeaders({ user: JSON.stringify(user) }),
    });
  }

  createNewUser$(user: User): Observable<any> {
    return this.http.post<User>(this.url, user)
  }

  getUser(): User {
    return this.user
  }

  setUser(user: User): void {
    this.user = user;
  }
}
