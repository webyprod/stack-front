import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFromUserComponent } from './posts-from-user.component';

describe('PostsFromUserComponent', () => {
  let component: PostsFromUserComponent;
  let fixture: ComponentFixture<PostsFromUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsFromUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFromUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
