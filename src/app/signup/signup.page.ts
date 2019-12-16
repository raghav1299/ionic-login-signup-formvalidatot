import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loginForm: FormGroup;


  error_messages = {
    'email': [
      { type: 'required', message: 'Please enter Reg No.'},
      { type: 'minlength', message: 'Please enter a valid Reg No.'},
      { type: 'maxlength', message: 'Please enter a valid Reg No.'}
    ],
    'password': [
      { type: 'required', message: 'Please enter the password'},
      { type: 'minlength', message: 'Password should contain minimum 6 letters.'},
      { type: 'maxlength', message: 'Passwors should not exceed 15 letters'}
    ],
    'emailid': [
      { type: 'required', message: 'Please enter the Email ID'},
      
    ],
    'name': [
      { type: 'required', message: 'Please enter your Name'},
     
    ],
  }

  constructor(public formBuilder: FormBuilder,private router:Router) {

    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15),
      ])),
      emailid: new FormControl('',Validators.compose([
        Validators.required,
        ,
      ])),
      name: new FormControl('',Validators.compose([
        Validators.required,
        
      ]))
    });
   }
   go1(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
