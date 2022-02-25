import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AllForms } from '../../all-forms';
// import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-custom-stepper-form',
  templateUrl: './custom-stepper-form.component.html',
  styleUrls: ['./custom-stepper-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CustomStepperFormComponent implements OnInit {
  @Input() formList: any;
  @Input() editableForm: boolean;
  @Input() formData: any;
  constructor() { }

  ngOnInit() {
  }

  saveProject() {
    this.formList.forEach((form: any) => {
      console.log(form.formGroup.value)
    });
  }

}

