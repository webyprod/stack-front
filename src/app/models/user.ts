import {Role} from './role';
import {Post} from './post';
import {Comments} from './comments';

export class User {
    userId: number;
    name: string;
    username: string;
    email: string;
    password: string;
    skill: string;
    role: Role;
    posts: Post[];
    comments: Comments[];
    token: string;

  }