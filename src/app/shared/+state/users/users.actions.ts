import { createAction, props } from '@ngrx/store';
import { User } from './users.models';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users failure',
  props<{ error: any }>()
);

export const getUser = createAction(
  '[Users] Get User by id',
  props<{ id: number }>()
);
