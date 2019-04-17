import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInnerComponent } from './home-inner.component';

describe('HomeInnerComponent', () => {
  let component: HomeInnerComponent;
  let fixture: ComponentFixture<HomeInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
