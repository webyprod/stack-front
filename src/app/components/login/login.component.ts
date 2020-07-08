import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { TokenService } from "../../services/token.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userService: UserService, private tokenStorage: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.userService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.router.navigate(['users/all']);
        this.reloadPage();
        alert("Connexion successfull");
        setTimeout(function(){ this.router.navigate(['users/all']); }, 3000);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage() {
    window.location.reload();
  }

}
