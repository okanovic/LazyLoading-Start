import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './Pages/posts/posts.component';
import { CommentsComponent } from './Pages/comments/comments.component';
import { AlbumsComponent } from './Pages/albums/albums.component';
import { PhotosComponent } from './Pages/photos/photos.component';
import { TodosComponent } from './Pages/todos/todos.component';
import { UsersComponent } from './Pages/users/users.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users', component: UsersComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
