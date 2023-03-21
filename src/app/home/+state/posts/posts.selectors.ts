import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, State, postsAdapter } from './posts.reducer';

const { selectAll, selectEntities } = postsAdapter.getSelectors();

// Lookup the 'Magazines' feature state managed by NgRx
export const selectPostsState = createFeatureSelector<State>(POSTS_FEATURE_KEY);

export const selectPostsLoaded = createSelector(
  selectPostsState,
  (state: State) => state.loaded
);

export const selectPostsError = createSelector(
  selectPostsState,
  (state: State) => state.error
);

export const selectPosts = createSelector(selectPostsState, (state: State) =>
  selectAll(state)
);

export const selectPostsEntity = createSelector(
  selectPostsState,
  (state: State) => selectEntities(state)
);
