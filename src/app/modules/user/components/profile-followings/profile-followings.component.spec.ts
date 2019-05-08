import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowingsComponent } from './profile-followings.component';

describe('ProfileFollowingsComponent', () => {
  let component: ProfileFollowingsComponent;
  let fixture: ComponentFixture<ProfileFollowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
