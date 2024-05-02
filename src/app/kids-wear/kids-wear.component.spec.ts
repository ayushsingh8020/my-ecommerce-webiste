import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsWearComponent } from './kids-wear.component';

describe('KidsWearComponent', () => {
  let component: KidsWearComponent;
  let fixture: ComponentFixture<KidsWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsWearComponent]
    });
    fixture = TestBed.createComponent(KidsWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
