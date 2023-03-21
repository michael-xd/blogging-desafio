import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, State, usersAdapter } from './users.reducer';

const { selectAll, selectEntities } = usersAdapter.getSelectors();

// Lookup the 'Magazines' feature state managed by NgRx
export const selectUsersState = createFeatureSelector<State>(USERS_FEATURE_KEY);

export const selectUsersLoaded = createSelector(
  selectUsersState,
  (state: State) => state.loaded
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state: State) => state.error
);

export const selectUsers = createSelector(selectUsersState, (state: State) =>
  selectAll(state)
);

export const selectUsersEntity = createSelector(
  selectUsersState,
  (state: State) => selectEntities(state)
);

export const selectEntity = (props: { id: number }) =>
  createSelector(selectUsersEntity, (entities) => {
    return entities[props.id];
  });
