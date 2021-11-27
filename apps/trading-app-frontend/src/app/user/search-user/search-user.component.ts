import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../shared/services/navigation/navigation.service';

@Component({
  selector: 'trading-app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit, OnDestroy {
  user!: User;
  error = false;
  errorMessage = '';
  formValue = '';
  subscriptions = new Subscription();
  searchUserForm: FormGroup = new FormGroup({});
  controls = {
    userId: [''],
    firstName: [''],
    lastName: [''],
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.searchUserForm = this.fb.group(this.controls);
  }

  onSubmit() {
    //TODO: send data to backend and display search.html result
    //TODO: Validation
    this.subscriptions = this.userService
      .mockFetchUsers$({
        userId: this.searchUserForm.value.userId,
        firstName: this.searchUserForm.value.firstName,
        lastName: this.searchUserForm.value.lastName,
      })
      .subscribe(
        (e) => {
          if (e.length <= 0) {
            this.error = true;
            this.errorMessage = 'No user found';
          } else {
            this.userService.setUsers(e);
            this.navigationService.navigateTo('home/search.html-user/users');
          }
        },
        (error) => {
          this.error = true;
          this.errorMessage = error;
        }
      );
  }

  onCancel() {
    this.searchUserForm.reset();
    this.navigationService.navigateToEmployeeHome();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
