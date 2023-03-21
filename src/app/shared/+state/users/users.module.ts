import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './users.reducer';
import { UsersEffects } from './users.effects';
import { UsersFacade } from './users.facade';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersFacade, UsersService],
})
export class StoreUsersModule {}
