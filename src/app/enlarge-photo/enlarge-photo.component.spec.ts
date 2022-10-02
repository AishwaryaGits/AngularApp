import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlargePhotoComponent } from './enlarge-photo.component';

describe('EnlargePhotoComponent', () => {
  let component: EnlargePhotoComponent;
  let fixture: ComponentFixture<EnlargePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlargePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlargePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
