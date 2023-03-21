import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';
import * as UsersSelectors from './users.selectors';
import * as UsersActions from './users.actions';
import { User } from './users.models';

@Injectable()
export class UsersFacade {
  usersLoaded$: Observable<boolean | undefined> = this.store.pipe(
    select(UsersSelectors.selectUsersLoaded)
  );

  usersError$: Observable<string | null | undefined> = this.store.pipe(
    select(UsersSelectors.selectUsersError)
  );

  users$: Observable<User[]> = this.store.pipe(
    select(UsersSelectors.selectUsers)
  );

  constructor(private readonly store: Store) {}

  loadUsers() {
    this.store.dispatch(UsersActions.loadUsers());
  }

  getUser(id: number): Observable<User | undefined> {
    return this.store.select(UsersSelectors.selectEntity({ id }));
  }
}
