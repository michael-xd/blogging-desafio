import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostsFacade } from '../../+state/posts/posts.facade';
import { Post, Comment } from '../../+state/posts/posts.models';
import { avatarSrcPath } from '../../utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]> = this.postsFacade.posts$;

  readonly avatarSrcPath = avatarSrcPath;

  private destroyed$: Subject<void> = new Subject();

  constructor(private postsFacade: PostsFacade) {}

  ngOnInit(): void {
    this.postsFacade.loadPost();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
