import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoDialogComponent } from './contact-info-dialog.component';

describe('ContactInfoDialogComponent', () => {
  let component: ContactInfoDialogComponent;
  let fixture: ComponentFixture<ContactInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
