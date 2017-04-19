import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommentsGroup} from "../comments/CommentsGroup";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  commentsGroups: CommentsGroup[];

  @Output()
  groupSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectCommentsGroup(id: number){
    this.groupSelected.emit();
  }

}
