import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSignUp() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Handle form submission logic
    const formData = this.signupForm.value;
    console.log('Form submitted:', formData);

    // Reset the form and submitted flag after successful submission
    this.signupForm.reset();
    this.submitted = false;
  }
}
