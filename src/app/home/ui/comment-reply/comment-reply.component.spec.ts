import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CommentReplyComponent } from './comment-reply.component';

describe('CommentReplyComponent', () => {
  let component: CommentReplyComponent;
  let fixture: ComponentFixture<CommentReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CommentReplyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable "Responder" button when reply form is valid', () => {
    const replyInput: HTMLTextAreaElement = fixture.debugElement.query(
      By.css('#replyInput')
    ).nativeElement;
    replyInput.value = 'Test reply';
    replyInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.form.valid).toBeTrue();
    expect(
      fixture.debugElement.query(By.css('#replyBtn')).nativeElement.disabled
    ).toBeFalse();
  });
});
