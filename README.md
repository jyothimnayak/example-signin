# Contact-Manager-App-
A full stack angular application
https://www.securecoding.com/blog/angular-firebase-authentication-integration/


import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { firebase } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;
 
 constructor(private angularFireAuth: AngularFireAuth) {
 this.userData = angularFireAuth.authState;
 }
 
 /* Sign up */
 SignUp(email: string, password: string) {
 this.angularFireAuth
 .auth
 .createUserWithEmailAndPassword(email, password)
 .then((res: any) => {
 console.log('You are Successfully signed up!', res);
 })
 .catch((error: { message: any; }) => {
 console.log('Something is wrong:', error.message);
 });
 }
 /* Sign in */
 SignIn(email: string, password: string) {
  this.angularFireAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(() => {
  console.log("you are in");
  })
  .catch((err: { message: any; }) => {
  console.log('Something went wrong:',err.message);
  });
  }
  
  /* Sign out */
  SignOut() {
  this.angularFireAuth
  .auth
  .signOut();
  }
 
}
  