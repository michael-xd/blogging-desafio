import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Comment } from '../../+state/posts/posts.models';
import { avatarSrcPath } from '../../utils/helpers';

@Component({
  selector: 'app-home-comment-reply',
  templateUrl: './comment-reply.component.html',
  styleUrls: ['./comment-reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentReplyComponent {
  comment: Comment | undefined;
  output: EventEmitter<any> = new EventEmitter();
  form = this.formBuilder.group({
    reply: [null, [Validators.required, Validators.maxLength(250)]],
  });

  readonly avatarSrcPath = avatarSrcPath;

  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder
  ) {}

  reply() {
    this.output.emit({ data: this.form.get('reply')?.value });
    this.bsModalRef.hide();
  }
}
