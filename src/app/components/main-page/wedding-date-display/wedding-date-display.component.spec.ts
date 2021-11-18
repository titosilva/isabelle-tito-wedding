import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDateDisplayComponent } from './wedding-date-display.component';

describe('WeddingDateDisplayComponent', () => {
  let component: WeddingDateDisplayComponent;
  let fixture: ComponentFixture<WeddingDateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
