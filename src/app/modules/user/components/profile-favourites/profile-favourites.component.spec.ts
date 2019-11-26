import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavouritesComponent } from './profile-favourites.component';

describe('ProfileFavouritesComponent', () => {
  let component: ProfileFavouritesComponent;
  let fixture: ComponentFixture<ProfileFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
