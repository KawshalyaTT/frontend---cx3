import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllForms } from 'src/app/shared-module/all-forms';
import { ICustomFormControl } from 'src/app/shared-module/interfaces/form-type';
import { ITargetData } from '../../interfaces/target-details';
@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.scss']
})
export class TargetFormComponent implements OnInit {
  public editableForm: boolean;
  public targetData: ITargetData;
  public targetFormGroup:FormGroup;
  public targetFormCtrl: ICustomFormControl[] = [
    { name: 'Target Name', type: 'text', required: true, disabled: false, readonly: false, formControlName: 'targetName' },
    { name: 'Target Code', type: 'text', required: true, disabled: false, readonly: false, formControlName: 'targetCode' },
    { name: 'Target Size', type: 'number', required: true, disabled: false, readonly: false, formControlName: 'targetSize' },
    { name: 'Client', type: 'select', required: true, disabled: false, readonly: false, formControlName: 'clientName', selectOptions: [], multiselect: false },
    { name: 'Estimated No. of loans', type: 'number', required: true, disabled: false, readonly: false, formControlName: 'EstimatedNoOfLoans' },
    { name: 'Team Members', type: 'select', required: true, disabled: false, readonly: false, formControlName: 'teamsMembers', selectOptions: [], multiselect: false },
    { name: 'Loan Type', type: 'select', required: true, disabled: false, readonly: false, formControlName: 'loanType', selectOptions: [], multiselect: false },
    { name: 'Project Type', type: 'select', required: true, disabled: false, readonly: false, formControlName: 'projectType', selectOptions: [], multiselect: false },
  ]
  customFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.targetFormGroup = new AllForms().targetDetailsForm;
    this.editableForm = Boolean(this.route.snapshot.paramMap.get('editable'));
    if (this.editableForm) {
      this.route
      .queryParams
      .subscribe((params) => {
          this.targetFormGroup.patchValue(params as ITargetData)
        });
    }
  }

  public createNewTarget() {

  }

}
