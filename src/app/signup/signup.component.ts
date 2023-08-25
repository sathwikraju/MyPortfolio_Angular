import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor() {}

  ngOnInit() {}

  onSignUp() {
    // TODO: Validate the user's input and create a new user account.
  }
}
