import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PostService } from '../../services/post.service';
import { TokenService } from '../../services/token.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {

  posts: Post[];
  user: User = new User();
  username: any;
  isLoggedIn:boolean;
  page:number=0;
  pages:Array<Number>;

  constructor(private token: TokenService, private postService: PostService,
    private router: Router, private userService: UserService) { }

    setPage(i, event:any){
      event.preventDefault();
      this.page=i;
      this.list();
    }

  ngOnInit() {
    this.reloadData();
    this.username = this.token.getUser().username;
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn){
      this.userService.findUser(this.username).subscribe((data)=> {
      this.user = data;
    });
  }
  }

  reloadData() {
    this.list();
  }

  list(){
    this.postService.findAllPosts(this.page).subscribe((data)=> {
      this.posts = data['content'];
      this.pages = new Array(data['totalPages'])
  });
  }

  postDetails(id: number){
    this.router.navigate(['/onepost/', id]);
  }

  enableData(post: Post){
    if(post.category === this.user.skill){
      return `OK`; 
    }else {
      return `X`;
    }
  }

}
