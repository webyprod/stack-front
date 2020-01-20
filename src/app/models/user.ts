import {Role} from './role';
import {Post} from './post';
import {Comments} from './comments';

export class User {
    userId: number;
    name: string;
    username: string;
    email: string;
    password: string;
    role: Role;
    posts: Post[];
    comments: Comments[];
    token: string;
    

    /*constructor(name: string, username: string, email: string, password: string){
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
    }*/
  }