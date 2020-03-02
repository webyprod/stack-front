import { Post } from './post';
import { User } from './user';


export class Comments {
    commentId: number;
    texte: string;
    username: string;
    published: string;
    user: User;
    post: Post;

  }