import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AuthService } from '../service/auth.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoginFrontpage = true;
  userToken:any;
  isLoginDisplay = false;
  email:any;
  password:any;

  constructor(private router : Router ,private authService:AuthService , private firebaseService :FirebaseService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getToken();
    }, 2500);
  }

  register() {
    this.router.navigate(['/register'])
  }

  signIn(){
    this.authService.signIn(this.email, this.password).subscribe((res: any) => {
      const userDataId:any = localStorage.getItem('userData')
      this.setToken(JSON.parse(userDataId)?.id)
      localStorage.setItem("userData" , userDataId)
      this.router.navigate(['/tabs/tab1'])
      alert('success')
    }, (error) => {
      alert(error.error.error.message)
    })

  }

  async setToken(userToken : any ) {
    await Storage.set({
      key: 'authtoken',
      value: JSON.stringify({
        token : userToken
      })
    });

  }

  async getToken() {
    const userDataId:any = localStorage.getItem('userData')
    const ret:any = await Storage.get({ key: 'authtoken' });
    this.userToken = JSON.parse(ret.value)?.token;
    const tokenId = JSON.parse(userDataId)?.id

    if(this.userToken === tokenId && this.userToken != undefined) {
        this.router.navigate(['/tabs/tab1'])
    } else {
      this.isLoginFrontpage = false;
      this.isLoginDisplay = true;
    }
  }

}
