import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloryPreviewComponent } from './glory-preview.component';

describe('GloryPreviewComponent', () => {
  let component: GloryPreviewComponent;
  let fixture: ComponentFixture<GloryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
