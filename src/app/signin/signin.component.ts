import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.signInForm.controls;
  }

  onSignIn() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Handle sign-in logic here
    const formData = this.signInForm.value;
    console.log('Sign-in form submitted:', formData);

    // Reset the form and submitted flag after successful submission
    this.signInForm.reset();
    this.submitted = false;
  }
}
