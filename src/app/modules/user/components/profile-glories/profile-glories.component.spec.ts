import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGloriesComponent } from './profile-glories.component';

describe('ProfileGloriesComponent', () => {
  let component: ProfileGloriesComponent;
  let fixture: ComponentFixture<ProfileGloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
