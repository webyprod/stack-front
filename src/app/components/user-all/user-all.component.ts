import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.findAllUsers();
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

}
