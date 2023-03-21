import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as PostsActions from './posts.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostsService } from './posts.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        this.service.getPosts().pipe(
          map((posts) => PostsActions.loadPostsSuccess({ posts })),
          catchError(async (error) => PostsActions.loadPostsFailure({ error }))
        )
      )
    )
  );

  constructor(private actions: Actions, private service: PostsService) {}
}
