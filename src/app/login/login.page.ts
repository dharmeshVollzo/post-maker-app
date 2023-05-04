import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoginFrontpage = true;

  constructor(private router : Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.isLoginFrontpage = false;
    }, 4000);
  }

  register() {
    this.router.navigate(['/register'])
  }

  signIn(){
    this.router.navigate(['/tabs/tab1'])
  }

}
