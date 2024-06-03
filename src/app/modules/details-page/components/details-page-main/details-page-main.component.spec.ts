import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageMainComponent } from './details-page-main.component';

describe('DetailsPageMainComponent', () => {
  let component: DetailsPageMainComponent;
  let fixture: ComponentFixture<DetailsPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPageMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
