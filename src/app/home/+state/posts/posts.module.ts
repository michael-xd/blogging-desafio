import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './posts.reducer';
import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsFacade, PostsService],
})
export class StorePostsModule {}
