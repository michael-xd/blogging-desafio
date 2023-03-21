import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.service.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError(async (error) => UsersActions.loadUsersFailure({ error }))
        )
      )
    )
  );

  constructor(private actions: Actions, private service: UsersService) {}
}
