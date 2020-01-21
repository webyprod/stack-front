import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {UserService} from './user.service';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements  CanActivate{

  currentUser: User;

  constructor(private router: Router, private userService: UserService) { 
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser);
  });
}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.currentUser){
      //check if route is restricted by role...
      console.log(route.data.roles);
  
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  
  }

}
