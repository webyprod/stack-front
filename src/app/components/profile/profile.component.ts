import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  user: User = new User();
  username: string;

  constructor(private token: TokenService, private userService: UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
    this.userService.findUser(this.username).subscribe((data)=> {
      this.user = data;
    });

    }

    /*listUsers(){
      this.router.navigate(['/users/all']);
    }*/

  }