export type CommentId = string;

export interface IComment {
  id: CommentId;
  text: string;
  user: string;
  parent?: CommentId;
}
