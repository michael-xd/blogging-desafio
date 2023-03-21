import { createAction, props } from '@ngrx/store';
import { Post, Author } from './posts.models';

export const loadPosts = createAction('[Posts] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts] Load Post failure',
  props<{ error: any }>()
);

export const replyComment = createAction(
  '[Posts] Reply to comment',
  props<{
    postId: number;
    parentCommentId: number;
    author: Author;
    reply: string;
  }>()
);
