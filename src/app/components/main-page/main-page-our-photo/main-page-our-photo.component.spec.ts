import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageOurPhotoComponent } from './main-page-our-photo.component';

describe('MainPageOurPhotoComponent', () => {
  let component: MainPageOurPhotoComponent;
  let fixture: ComponentFixture<MainPageOurPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageOurPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageOurPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
