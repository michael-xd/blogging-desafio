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
import { UserDetailsComponent } from '../../ui/user-details/user-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPost.POSTS_FEATURE_KEY, fromPost.reducer),
    EffectsModule.forFeature([PostsEffects]),
    StorePostsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    HomeRoutingModule,
    NavBarComponentModule,
  ],
  declarations: [HomeComponent, UserDetailsComponent],
})
export class HomeComponentModule {}
