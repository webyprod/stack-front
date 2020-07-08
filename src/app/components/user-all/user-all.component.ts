import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {

  users: User[];
  user: User = new User();
  currentUser: any;
  isLoggedIn: boolean;
  page:number=0;
  pages:Array<Number>;

  constructor(private token: TokenService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn){
      this.userService.findUser(this.currentUser.username).subscribe((data)=> {
      this.user = data;
    });}
    this.reloadData();
  }

  setPage(i, event:any){
    event.preventDefault();
    this.page=i;
    this.reloadData();
  }

  reloadData() {
    this.userService.findAllUsers(this.page).subscribe((data)=>{
      this.users = data['content'];
      this.pages = new Array(data['totalPages'])
    });
  }

  userDetails(username: string){
    this.router.navigate(['/user', username]);
  }

  deleteUser(username: string) {
    this.userService.deleteUser(username)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  isAdmin(){
    if(this.user.roles == "ADMIN"){
      return true;
    }else{
      return false;
    }
  }

}
