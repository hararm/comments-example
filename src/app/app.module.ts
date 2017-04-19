import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsGroupComponent } from './comments-group/comments-group.component';
import { CommentDataComponent } from './comment-data/comment-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentsGroupComponent,
    CommentDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
