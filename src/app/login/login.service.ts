import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === "admin@gmail.com" && password === "Admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === "user@gmail.com" && password === "user") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}