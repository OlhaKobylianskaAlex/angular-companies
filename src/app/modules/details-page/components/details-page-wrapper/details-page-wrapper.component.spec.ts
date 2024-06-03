import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageWrapperComponent } from './details-page-wrapper.component';

describe('DetailsPageWrapperComponent', () => {
  let component: DetailsPageWrapperComponent;
  let fixture: ComponentFixture<DetailsPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPageWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
