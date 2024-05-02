import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensWearComponent } from './womens-wear.component';

describe('WomensWearComponent', () => {
  let component: WomensWearComponent;
  let fixture: ComponentFixture<WomensWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensWearComponent]
    });
    fixture = TestBed.createComponent(WomensWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
