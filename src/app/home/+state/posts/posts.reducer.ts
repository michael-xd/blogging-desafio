import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as PostsActions from './posts.actions';
import { Comment, Post } from './posts.models';
import { commentTree } from '../../utils/helpers';

export const POSTS_FEATURE_KEY = 'posts';

export interface State extends EntityState<Post> {
  loaded?: boolean;
  error?: string | null;
}

export interface BlogPartialState {
  readonly [POSTS_FEATURE_KEY]: State;
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({});

export const initialState: State = postsAdapter.getInitialState({});

let lastCommentId = 100;

const postReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(
      [
        ...posts.map((post) => ({
          ...post,
          commentsTree: commentTree(post.comments),
        })),
      ],
      { ...state, loaded: true }
    )
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    PostsActions.replyComment,
    (state, { postId, parentCommentId, author, reply }) => {
      const comments = [
        ...(state.entities[postId]?.comments || []),
        {
          id: ++lastCommentId,
          respondsTo: { id: parentCommentId },
          author,
          timestamp: new Date().toISOString(),
          content: reply,
        } as Comment,
      ];

      return postsAdapter.updateOne(
        {
          id: postId,
          changes: {
            comments,
            commentsTree: commentTree(comments),
          },
        },
        { ...state }
      );
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}
