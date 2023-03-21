import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as UsersActions from './users.actions';
import { User } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<User> {
  loaded?: boolean;
  error?: string | null;
}

export interface BlogPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: State = usersAdapter.getInitialState({});

const blogReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll([...users], { ...state, loaded: true })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return blogReducer(state, action);
}
