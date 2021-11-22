import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'trading-app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  submitted = false;


  constructor(private fb: FormBuilder, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userId: [''],
      userPassword: ['']
      //TODO: uncomment for validation
      // userId: ['', [Validators.required, Validators.minLength(1)]],
      // userPassword: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  onSubmit() {
    // TODO: logic to send user data to auth service on backend
    this.submitted = true;
    console.log(this.signUpForm.value);
    this.navigationService.navigateTo('employee/home')
  }

  onCancel() {
    this.signUpForm.reset();
  }

}
