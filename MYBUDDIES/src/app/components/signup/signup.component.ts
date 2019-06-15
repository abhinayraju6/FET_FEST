import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../services/localstorage.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9]+[.]*[a-z0-9]*@[a-z0-9.-]+\.[a-z]{2,4}$';
  name = '^[a-zA-Z][ a-zA-Z]*$';
  password = '^[0-9a-zA-Z][0-9a-zA-Z@]*$';
  emailid: string;
  showmsg: boolean = false;
  showbutton: boolean = true;
  displayemail: string;

  ngOnInit() {
    this.resetForm();
  }

  constructor(private router: Router,private localStorageService:LocalStorageService){
    
  }

  OnSubmit(){//fake submit
    //this.localStorageService.setuser(this.user);
  }
  
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      name: '',
      email: '',
      picture: '',
      department: '',
      designation: '',
      gender: '',
      booldgroup: '',
     // birthdate: '',
      contact: '',
      address: '',
      password: '',
    };
  }
}

