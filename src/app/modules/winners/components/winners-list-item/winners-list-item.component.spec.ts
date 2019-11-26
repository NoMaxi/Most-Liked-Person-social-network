import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersListItemComponent } from './winners-list-item.component';

describe('WinnersListItemComponent', () => {
  let component: WinnersListItemComponent;
  let fixture: ComponentFixture<WinnersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnersListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
