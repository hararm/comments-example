import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsGroupComponent } from './comments-group/comments-group.component';
import { CommentDataComponent } from './comment-body/comment-data.component';
import { CommentsService } from './services/comments-service.service';
import { CommentsContainerComponent } from './comments-container-component/comments-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentsGroupComponent,
    CommentDataComponent,
    CommentsContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
