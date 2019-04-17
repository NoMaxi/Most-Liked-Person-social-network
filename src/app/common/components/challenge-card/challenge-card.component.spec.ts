import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCardComponent } from './challenge-card.component';

describe('ChallengeCardComponent', () => {
  let component: ChallengeCardComponent;
  let fixture: ComponentFixture<ChallengeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
