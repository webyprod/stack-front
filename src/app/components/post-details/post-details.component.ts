import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Comments } from '../../models/comments';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: Post;
  currentUser: any;
  item: any = {};
  newComment: Comments = new Comments();
  isSuccessful: boolean;
  createCommentFailed: boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute,private router: Router,
    private postService: PostService, private token: TokenService) { }

  ngOnInit() {
    this.post = new Post();
    this.currentUser = this.token.getUser();
    this.id = this.route.snapshot.params['id'];
    this.postService.findPost(this.id).subscribe(data => {this.post = data}, error => console.log(error));
  }


  listPosts(){
    this.router.navigate(['posts/all']);
  }

  onSubmit(){
    this.newComment.username = this.currentUser.username;
    this.newComment.texte = this.item.texte;
    this.postService.saveComment(this.newComment, this.id).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.createCommentFailed = false;
        //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.createCommentFailed = true;
      }
    );
  }

}
