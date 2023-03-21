import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, take, takeUntil, zip } from 'rxjs';
import { PostsFacade } from '../../+state/posts/posts.facade';
import { Post } from '../../+state/posts/posts.models';
import { avatarSrcPath } from '../../utils/helpers';
import { User } from 'src/app/shared/+state/users/users.models';
import { UsersFacade } from 'src/app/shared/+state/users/users.facade';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { UserDetailsComponent } from '../../ui/user-details/user-details.component';
import { intersection } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]> = this.postsFacade.posts$;
  users$: Observable<User[]> = this.usersFacade.users$;
  bsModalRef?: BsModalRef;
  readonly avatarSrcPath = avatarSrcPath;

  private destroyed$: Subject<void> = new Subject();

  constructor(
    private postsFacade: PostsFacade,
    private usersFacade: UsersFacade,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.postsFacade.loadPost();
    this.usersFacade.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  userDetails(id: number) {
    zip([this.usersFacade.getUser(id), this.usersFacade.getUser(1)])
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(([user, loggedInUser]) => {
        const initialState: ModalOptions = {
          initialState: {
            data: user,
            commonFriends: intersection(
              user?.friendIds,
              loggedInUser?.friendIds
            ).length,
          },
          class: 'modal-dialog-centered',
        };
        this.bsModalRef = this.modalService.show(
          UserDetailsComponent,
          initialState
        );
      });
  }
}
