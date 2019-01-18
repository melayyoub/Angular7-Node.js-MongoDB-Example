import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private IsUserLoggedIn;
public username;

  constructor() {
  this.IsUserLoggedIn = false;
  }

  setUserLoggedIn(name = false) {
   this.IsUserLoggedIn = true;
   this.username = name;
  }

  getUserLoggedIn() {
   return this.IsUserLoggedIn;
  }
}
