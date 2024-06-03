import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListWrapperComponent } from './home-list-wrapper.component';

describe('HomeListWrapperComponent', () => {
  let component: HomeListWrapperComponent;
  let fixture: ComponentFixture<HomeListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
