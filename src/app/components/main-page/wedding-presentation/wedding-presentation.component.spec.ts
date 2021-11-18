import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPresentationComponent } from './wedding-presentation.component';

describe('WeddingPresentationComponent', () => {
  let component: WeddingPresentationComponent;
  let fixture: ComponentFixture<WeddingPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
