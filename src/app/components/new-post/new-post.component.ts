import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post;
  submitted = false;

  item: any = {};
  isSuccessful = false;
  newpost: Post = new Post();
  createPostFailed = false;
  currentUser: any;
  errorMessage = '';

  constructor(private postService: PostService, private router: Router, private token: TokenService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

  categories = ["JAVA", "HTML", "CSS", "JAVASCRIPT", "FRONTEND", "BACKEND", "ANGULAR", "REACT", "PHP"];

  newPost():void{
    this.submitted=false;
    
  }

  onSubmit(s) {
    console.log(s);
    this.item.username = this.currentUser.username;
    this.newpost.username = this.item.username;
    this.newpost.subject = this.item.subject;
    this.newpost.message = this.item.message;
    this.newpost.category = this.item.category;
    this.postService.savePost(this.newpost).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.createPostFailed = false;
        /*this.gotoList();*/
      },
      err => {
        this.errorMessage = err.error.message;
        this.createPostFailed = true;
      }
    );
  }

  gotoList() {
    this.router.navigate(['/post/all']);
  }

}