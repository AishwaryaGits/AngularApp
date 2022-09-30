import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  onSubmit() {
      this.submitted = true;

      // stop the process here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      console.log(this.loginForm.value)
      
      /* this.authenticationService.login(this.loginForm.value)
      .subscribe(
        userDetails => {
          if(userDetails) {
            this.router.navigate(['/'], { replaceUrl: true});
          } else {
            alert('Wrong username and password details entered!')
          }
        }
      ) */
  }
}

