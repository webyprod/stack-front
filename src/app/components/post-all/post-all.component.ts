import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.posts = this.postService.findAllPosts();
  }

  postDetails(id: number){
    this.router.navigate(['/post/:id', id]);
  }

}
