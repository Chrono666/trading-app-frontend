import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'trading-app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  searchUserForm: FormGroup = new FormGroup({});
  controls = {
    customerId: [''],
    firstName: [''],
    lastName: [''],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchUserForm = this.fb.group(this.controls);
  }

  onSubmit() {
    //TODO: send data to backend and display search result
    //TODO: Validation
    console.log(this.searchUserForm.controls);
  }

  onCancel() {
    this.searchUserForm.reset();
  }

}
