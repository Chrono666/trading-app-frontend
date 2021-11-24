import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user/user.service';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'trading-app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  error = false;
  errorMessage = '';
  subscriptions: Subscription = new Subscriber();
  createUserForm: FormGroup = new FormGroup({});
  controls = {
    firstName: ['', [Validators.required, Validators.minLength(1)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    street: ['', [Validators.required, Validators.minLength(1)]],
    city: ['', [Validators.required, Validators.minLength(1)]],
    state: ['', [Validators.required, Validators.minLength(1)]],
    zip: ['', [Validators.required, Validators.minLength(1)]],
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group(this.controls);
  }

  onSubmit() {
    this.subscriptions = this.userService
      .mockCreateNewUser$({
        firstName: this.createUserForm.value.firstName,
        lastName: this.createUserForm.value.lastName,
        street: this.createUserForm.value.street,
        city: this.createUserForm.value.city,
        state: this.createUserForm.value.state,
        zip: this.createUserForm.value.zip,
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['employee/home']).then();
        },
        (error) => {
          this.error = true;
          this.errorMessage = error;
        }
      );
  }

  onCancel() {
    this.createUserForm.reset();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
