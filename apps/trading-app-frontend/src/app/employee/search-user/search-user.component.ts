import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'trading-app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  user!: User;
  error = false;
  errorMessage = '';
  formValue = '';
  searchUserForm: FormGroup = new FormGroup({});
  controls = {
    userId: [''],
    firstName: [''],
    lastName: [''],
  };

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.searchUserForm = this.fb.group(this.controls);
  }

  onSubmit() {
    //TODO: send data to backend and display search result
    //TODO: Validation
    console.log(this.searchUserForm);
    this.userService
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
          } else console.log(e);
        },
        (error) => {
          this.error = true;
          this.errorMessage = error;
        }
      );
  }

  onCancel() {
    this.searchUserForm.reset();
  }

}
