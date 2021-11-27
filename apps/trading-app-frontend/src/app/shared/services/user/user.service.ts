import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { map, Observable, of } from 'rxjs';
import customerMock from '../../../mock-data/customerMock.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'backendURL';
  // should be all users when no search happens.
  // or is a subset of all users when the user searches for something.
  users: User[] = [];
  user: User = {};

  constructor(private http: HttpClient) {
  }

  //TODO: faulty logic but user selection should happen in backend
  //TODO: backend should also return error msg if no user exists
  mockFetchUsers$(user: User): Observable<User[]> {
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

  mockFetchAllUsers$(): Observable<User[]> {
    return of(customerMock as User[]).pipe(
      map((response: User[]) => {
        return response;
      })
    );
  }

  mockCreateNewUser$(user: User): Observable<any> {
    return of('new user was created');
  }

  fetchUsers$(user: User): Observable<User[]> {
    return this.http.get<User[]>(this.url, {
      headers: new HttpHeaders({ user: JSON.stringify(user) })
    });
  }

  createNewUser$(user: User): Observable<any> {
    return this.http.post<User>(this.url, user);
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUsers(): User[] {
    return this.users;
  }

  setUsers(users: User[]): void {
    this.users = users;
  }

}
