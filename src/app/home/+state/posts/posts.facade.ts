import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';
import * as PostSelectors from './posts.selectors';
import * as PostActions from './posts.actions';
import { Author, Post } from './posts.models';

@Injectable()
export class PostsFacade {
  postLoaded$: Observable<boolean | undefined> = this.store.pipe(
    select(PostSelectors.selectPostsLoaded)
  );

  postError$: Observable<string | null | undefined> = this.store.pipe(
    select(PostSelectors.selectPostsError)
  );

  posts$: Observable<Post[]> = this.store.pipe(
    select(PostSelectors.selectPosts)
  );

  PostEntity$: Observable<Dictionary<Post>> = this.store.pipe(
    select(PostSelectors.selectPostsEntity)
  );

  constructor(private readonly store: Store) {}

  loadPost() {
    this.store.dispatch(PostActions.loadPosts());
  }

  replyComment(
    postId: number,
    parentCommentId: number,
    author: Author,
    reply: string
  ) {
    this.store.dispatch(
      PostActions.replyComment({
        postId,
        parentCommentId,
        author,
        reply,
      })
    );
  }
}
