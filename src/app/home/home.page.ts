import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message: 'Please enter Reg No.'},
      { type: 'minlength', message: 'Please enter a valid Reg No.'},
      { type: 'maxlength', message: 'Please enter a valid Reg No.'}
    ],
    'password': [
      { type: 'required', message: 'Please enter the password'},
      { type: 'minlength', message: 'Password should contain minimum 6 letters'},
      { type: 'maxlength', message: 'Password should not exceed 15 letters'}
    ],
  }

  constructor(private router:Router,public formBuilder: FormBuilder) {
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
  ]))
});
  }
  
go(){
  this.router.navigate(['signup']);
}
ngOnInit(){}

}
