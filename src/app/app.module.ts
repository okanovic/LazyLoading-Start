import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';

const appRoutes:Routes = [
  {
    path: 'posts', 
    loadChildren: () => import('./Pages/posts/posts-routing.module').then(m => m.PostsModule)
  },
  {
    path: 'comments', 
    loadChildren: () => import('./Pages/comments/comments-routing.module').then(m => m.CommentsModule)
  },
  {
    path: 'albums', 
    loadChildren: () => import('./Pages/albums/albums-routing.module').then(m => m.AlbumsModule)
  },
  {
    path: 'photos', 
    loadChildren: () => import('./Pages/photos/photos-routing.module').then(m => m.PhotosModule)
  },
  {
    path: 'todos', 
    loadChildren: () => import('./Pages/todos/todos-routing.module').then(m => m.TodosModule)
  },
  {
    path: 'users', 
    loadChildren: () => import('./Pages/users/users-routing.module').then(m => m.UsersModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
