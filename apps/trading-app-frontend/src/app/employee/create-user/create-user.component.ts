import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'trading-app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup = new FormGroup({});
  controls = {
    firstName: [''],
    lastName: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group(this.controls);
  }

  onSubmit() {
    //TODO: send data to backend redirect to home screen
    //TODO: Validation
    console.log(this.createUserForm.controls);
  }

  onCancel() {
    this.createUserForm.reset();
  }

}
