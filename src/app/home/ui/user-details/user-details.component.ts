import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from 'src/app/shared/+state/users/users.models';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { avatarSrcPath } from '../../utils/helpers';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  set data(value: User | undefined) {
    if (!value) {
      return;
    }
    this.user = {
      ...value,
      posts: value.posts
        .map((post) => ({ ...post, isCollapsed: false }))
        .slice(0, 3),
    };
  }
  user: User | undefined;
  commonFriends: number | undefined;

  readonly avatarSrcPath = avatarSrcPath;

  constructor(public bsModalRef: BsModalRef) {}
}
