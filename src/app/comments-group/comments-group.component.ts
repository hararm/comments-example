import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CommentsGroup} from '../viewmodel/CommentsGroup';

@Component({
  selector: 'app-comments-group',
  templateUrl: './comments-group.component.html',
  styleUrls: ['./comments-group.component.css']
})
export class CommentsGroupComponent implements OnInit {

  @Input()
  commentsGroup: CommentsGroup;
  private isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
}
