import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: Post;

  constructor(private route: ActivatedRoute,private router: Router,
    private postService: PostService) { }
/*
  ngOnInit() {
    this.post = new Post();

    this.id = this.route.snapshot.params['id'];

    this.postService.findPost(this.id).subscribe(data => {this.post = data}, error => console.log(error));
  }
  */
 ngOnInit() {}

  listPosts(){
    this.router.navigate(['posts/all']);
  }

}
