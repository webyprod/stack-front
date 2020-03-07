import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { UserAllComponent } from './components/user-all/user-all.component';
import { PostAllComponent } from './components/post-all/post-all.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    NewPostComponent,
    UserAllComponent,
    PostAllComponent,
    PostDetailsComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
