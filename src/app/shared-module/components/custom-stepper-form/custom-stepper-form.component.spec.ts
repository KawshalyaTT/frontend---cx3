import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepperFormComponent } from './custom-stepper-form.component';

describe('CustomStepperFormComponent', () => {
  let component: CustomStepperFormComponent;
  let fixture: ComponentFixture<CustomStepperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStepperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
