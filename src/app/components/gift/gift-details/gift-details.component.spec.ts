import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftDetailsComponent } from './gift-details.component';

describe('GiftDetailsComponent', () => {
  let component: GiftDetailsComponent;
  let fixture: ComponentFixture<GiftDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
