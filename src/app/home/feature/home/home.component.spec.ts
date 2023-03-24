import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromPost from '../../+state/posts/posts.reducer';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsFacade } from '../../+state/posts/posts.facade';
import { UsersFacade } from 'src/app/shared/+state/users/users.facade';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponentModule } from 'src/app/shared/ui/nav-bar/nav-bar.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        StoreModule.forRoot({
          [fromPost.POSTS_FEATURE_KEY]: fromPost.reducer,
        }),
        EffectsModule.forRoot(),
        ModalModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [PostsFacade, UsersFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
