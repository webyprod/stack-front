import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {UserAllComponent} from './components/user-all/user-all.component';
import {PostAllComponent} from './components/post-all/post-all.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import { HomeComponent } from './components/home/home.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { AuthService } from './services/auth.service';




const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'auth/login', component:LoginComponent},
    {path:'auth/registration', component:RegisterComponent},
    {path:'user/:username', component:ProfileComponent},
    /*{path:'post/:id/comment', component:NewCommentComponent},*/
    {path:'users/all', component:UserAllComponent},
    {path:'posts/all', component:PostAllComponent},
    {path:'onepost/:id', component:PostDetailsComponent},
    {path:'post/new', component:NewPostComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }