import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponentModule } from 'src/app/shared/ui/nav-bar/nav-bar.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StorePostsModule } from '../../+state/posts/posts.module';
import * as fromPost from '../../+state/posts/posts.reducer';
import { PostsEffects } from '../../+state/posts/posts.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPost.POSTS_FEATURE_KEY, fromPost.reducer),
    EffectsModule.forFeature([PostsEffects]),
    StorePostsModule,
    HomeRoutingModule,
    NavBarComponentModule,
  ],
  declarations: [HomeComponent],
})
export class HomeComponentModule {}
