import {Component, Input, OnInit} from '@angular/core';
import {CommentSummaryVM} from "../comments/CommentSummaryVM";
import {CommentsGroup} from "../comments/CommentsGroup";


@Component({
  selector: 'app-comments-group',
  templateUrl: './comments-group.component.html',
  styleUrls: ['./comments-group.component.css']
})
export class CommentsGroupComponent implements OnInit {


  @Input()
  commentsGroup: CommentsGroup[];

  constructor() { }

  ngOnInit() {
  }

}
