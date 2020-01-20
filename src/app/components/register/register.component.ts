import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.userService.register(this.user).subscribe(data => {
      this.router.navigate(['/auth/login']);
    },err => {
      this.errorMessage = "Username is already exist";
    });
  }

}
