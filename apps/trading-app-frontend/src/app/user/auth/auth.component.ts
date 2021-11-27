import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationService } from '../../shared/services/navigation/navigation.service';
import { SessionService } from '../../shared/services/session/session.service';
import { UserService } from '../../shared/services/user/user.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trading-app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = new FormGroup({});
  submitted = false;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private sessionService: SessionService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userId: [''],
      userPassword: [''],
      //TODO: uncomment for validation
      // userId: ['', [Validators.required, Validators.minLength(1)]],
      // userPassword: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    // TODO: error handling also in html
    this.subscriptions = this.sessionService
      .mockSignIn$(
        this.signUpForm.value.userId,
        this.signUpForm.value.userPassword
      )
      .subscribe((user) => {
        this.userService.setUser(user);
        this.authService.authenticated = true;
        this.navigationService.navigateTo('/home');
      });
  }

  onCancel() {
    this.signUpForm.reset();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
