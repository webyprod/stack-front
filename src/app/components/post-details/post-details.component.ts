import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
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
  isLoggedIn: boolean;
  enabled: boolean;
  user = new User();

  constructor(private route: ActivatedRoute,private router: Router,
    private postService: PostService, private userService: UserService, private token: TokenService) { }

  ngOnInit() {
    this.post = new Post();
    this.isLoggedIn = !!this.token.getToken();
    this.currentUser = this.token.getUser();
    this.id = this.route.snapshot.params['id'];
    if (this.isLoggedIn){
      this.userService.findUser(this.currentUser.username).subscribe((data)=> {
      this.user = data;
    });
    
    
    
  }
    this.postService.findPost(this.id).subscribe(data => {
      this.post = data;
      console.log(this.post.category);
      console.log(this.user.skill);
      this.enabled = this.post.category === this.user.skill;
    }, error => console.log(error));
    
    
    
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
