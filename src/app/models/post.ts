import { User } from './user';
import { Comments } from './comments';

export class Post {

      public postId: number;
      public subject: string;
      public message: string;
      public publishDate: string;
      public username: string;
    
    public userId?: User;
    public answers: Comments[];
  
    
}