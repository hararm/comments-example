import {CommentSummaryVM} from './CommentSummaryVM';
/**
 * Created by Armen on 2017-04-18.
 */

export interface CommentsGroup {
  commentGroupId: number;
  CommentGroupName: string;
  comments: CommentSummaryVM[];
}
