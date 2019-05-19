import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersCoverComponent } from './winners-cover.component';

describe('WinnersCoverComponent', () => {
  let component: WinnersCoverComponent;
  let fixture: ComponentFixture<WinnersCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnersCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
