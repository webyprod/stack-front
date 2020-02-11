import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenService) { }

  ngOnInit() {
    /*this.user = new User();
    this.username = this.route.snapshot.params['username'];
    this.userService.findUser(this.username).subscribe(data => { this.user = data;}, error => console.log(error));*/
    this.currentUser = this.token.getUser();
    }

    /*listUsers(){
      this.router.navigate(['/users/all']);
    }*/

  }