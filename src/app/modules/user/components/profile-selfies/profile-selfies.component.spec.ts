import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSelfiesComponent } from './profile-selfies.component';

describe('ProfileSelfiesComponent', () => {
  let component: ProfileSelfiesComponent;
  let fixture: ComponentFixture<ProfileSelfiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSelfiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
