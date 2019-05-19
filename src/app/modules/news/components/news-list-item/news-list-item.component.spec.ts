import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListItemComponent } from './news-list-item.component';

describe('NewsListItemComponent', () => {
  let component: NewsListItemComponent;
  let fixture: ComponentFixture<NewsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
