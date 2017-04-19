import {Component, Input, OnInit} from '@angular/core';
import {CommentSummaryVM} from "../comments/CommentSummaryVM";

@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html',
  styleUrls: ['./comment-data.component.css']
})
export class CommentDataComponent implements OnInit {

  @Input()
  comment: CommentSummaryVM;
  constructor() { }

  ngOnInit() {
  }

}
