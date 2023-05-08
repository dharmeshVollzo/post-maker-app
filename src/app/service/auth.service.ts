
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment.prod';
import { AuthResponse } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User> (null!);

  constructor(private http:HttpClient, private router:Router) { }


  signUp(email:any ,password:any){
    return  this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIznV_nJDYuTJrkEo7AGRA-ade4ZTfbk0`,{
      email:email,
      password:password,
      returnSecureToken: true,
    }).pipe(
      tap(res =>{
        this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn)
      })
    )
  }

  signIn(email:any ,password:any){
    return  this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIznV_nJDYuTJrkEo7AGRA-ade4ZTfbk0`,{
      email:email,
      password:password,
      returnSecureToken: true,
    }).pipe(
      tap(res =>{
        this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn)
      })
    )
  }

  signOut(){
    this.user.next(null!)
    this.router.navigate(['/login']);
    localStorage.removeItem('userData')
    localStorage.clear()
  }

  private authenticatedUser(email: any, userId: any, token: any, expiredIn: any) {
    const expirationDate = new Date(new Date().getTime() + expiredIn*100);
    const user =  new User(email,userId,token,expirationDate) 
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user) )
  } 

  forgotPassword(email:any){
    return  this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAIznV_nJDYuTJrkEo7AGRA-ade4ZTfbk0`,{
      requestType:'PASSWORD_RESET',
      email:email
    })
  }

  changePassword(data:any){
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAIznV_nJDYuTJrkEo7AGRA-ade4ZTfbk0`,{
      idToken:data.idToken,
      password:data.password,
      returnSecureToken:true
    })
  }
  
}
