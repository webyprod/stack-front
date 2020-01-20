import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post;
  submitted = false;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  newPost():void{
    this.submitted=false;
    
  }

  save(){
    this.postService.savePost(this.post).subscribe(
      data => console.log(data), 
      error => console.log(error));

      this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/post/all']);
  }

}