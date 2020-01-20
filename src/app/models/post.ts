import { User } from './user';
import { Comments } from './comments';

export class Post {

      public postId: number;
      public subject: string;
      public message: string;
      public publishDate: string;
      public username: string;
    
    public userId?: User;
    public comments?: Comments[];

    /*constructor(subject: string, message: string, user: string){
      this.subject = subject;
      this.message = message;
      this.username = user;
    }*/
  
    
}