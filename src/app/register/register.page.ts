import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:any;
  password:any;

  constructor(private router : Router , private authService:AuthService , private firebaseService :FirebaseService) { }

  ngOnInit() {
  }

  createAccount(){    
    this.authService.signUp(this.email,this.password).subscribe((res:any)=>{
      alert('account create')
    }, (error) => {  
      alert(error.error.error.message)
    })

   this.router.navigate(['/login'])
  }


}
