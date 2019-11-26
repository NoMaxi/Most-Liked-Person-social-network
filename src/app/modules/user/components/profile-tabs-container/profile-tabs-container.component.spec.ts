import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabsContainerComponent } from './profile-tabs-container.component';

describe('ProfileTabsContainerComponent', () => {
  let component: ProfileTabsContainerComponent;
  let fixture: ComponentFixture<ProfileTabsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTabsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
