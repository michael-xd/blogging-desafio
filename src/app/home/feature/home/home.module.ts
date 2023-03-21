import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponentModule } from 'src/app/shared/ui/nav-bar/nav-bar.module';
import { StorePostsModule } from '../../+state/posts/posts.module';
import * as fromPost from '../../+state/posts/posts.reducer';
import { PostsEffects } from '../../+state/posts/posts.effects';
import { UserDetailsComponent } from '../../ui/user-details/user-details.component';
import { CommentReplyComponent } from '../../ui/comment-reply/comment-reply.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPost.POSTS_FEATURE_KEY, fromPost.reducer),
    EffectsModule.forFeature([PostsEffects]),
    StorePostsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    HomeRoutingModule,
    NavBarComponentModule,
  ],
  declarations: [HomeComponent, UserDetailsComponent, CommentReplyComponent],
})
export class HomeComponentModule {}
