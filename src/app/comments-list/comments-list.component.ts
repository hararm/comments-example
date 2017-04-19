import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommentsGroup} from '../viewmodel/CommentsGroup';
import {CommentsService} from '../services/comments-service.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  commentsGroups: CommentsGroup[];

  @Output()
  groupSelected = new EventEmitter();
  constructor(private commentsService: CommentsService) {
    this.commentsGroups = commentsService.getComments();
  }

  ngOnInit() {
  }
}
