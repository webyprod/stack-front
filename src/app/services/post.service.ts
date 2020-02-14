import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Post } from '../models/post';

let API_URL = "http://localhost:8082/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  findAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + "posts/all", {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findPost(id: number): Observable<Post>{
    return this.http.get<Post>(API_URL + "onepost/" + id);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(API_URL + "post/new", post)
  }

}