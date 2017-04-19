import { Injectable } from '@angular/core';
import {CommentsGroup} from '../viewmodel/CommentsGroup';

@Injectable()
export class CommentsService {

  commentGroups: CommentsGroup[] =
    [ { commentGroupId: 1, CommentGroupName: 'Today',
        comments: [ { id: 1, text: 'Comment 1', timestamp: new Date().getTime(), participants: ['Eric Clapton', 'Jimmy Hendrix']} ] },
      { commentGroupId: 2, CommentGroupName: 'Yesterday',
        comments: [ { id: 2, text: 'Comment 2', timestamp: new Date().getTime(), participants: ['Eric Clapton', 'Jimmy Hendrix']} ] },
      { commentGroupId: 3, CommentGroupName: 'Two weeks ago',
        comments: [ { id: 3, text: 'Comment 3', timestamp: new Date().getTime(), participants: ['Eric Clapton', 'Jimmy Hendrix']},
          { id: 4,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            timestamp: new Date().getTime(),
            participants: ['Eric Clapton', 'Jimmy Hendrix']},
          { id: 5,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            timestamp: new Date().getTime(),
            participants: ['Eric Clapton', 'Jimmy Hendrix']},
          { id: 6,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            timestamp: new Date().getTime(),
            participants: ['Eric Clapton', 'Jimmy Hendrix']},
          { id: 7,
             text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            timestamp: new Date().getTime(),
            participants: ['Eric Clapton', 'Jimmy Hendrix']},
        ] }] ;
  constructor() { }
  getComments(): CommentsGroup[] {
    return this.commentGroups;
  }
}
