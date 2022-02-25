import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProjectData } from 'src/app/dashboard/interfaces/project-details';
import { AllForms } from 'src/app/shared-module/all-forms';
import { ICustomFormControl } from 'src/app/shared-module/interfaces/form-type';
import { IIndustry } from '../../interfaces/industry';
import { IProjectType } from '../../interfaces/project-type';
import { IRegions } from '../../interfaces/regions';
import { ISector } from '../../interfaces/sector';
import { ProjectsService } from '../../services/projects.service';


export interface ProjectList {
  formCtrl: any[];
  formName: string;
  formGroup: FormGroup;
}
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  public projectData: IProjectData;
  private regionList: IRegions[] = [];
  private industries: IIndustry[] = [];
  private sector: ISector[] = [];
  private projectType: IProjectType[] = [];
  public projectFormList: ProjectList[] = [];

  isFormEditable: boolean;
  constructor(private route: ActivatedRoute, private projectService: ProjectsService) { }

  async ngOnInit() {
    await this.getRegionsData();
    await this.getIndustryData();
    await this.getSectorData();
    await this.getProjectTypeData();
     this.projectFormList =[
      {
        formCtrl: [
          { name: 'Client Name', type: 'text', required: true, disbled: false, readonly: false, formControlName: 'clientName' },
          { name: 'Client Region', type: 'select', required: true, disbled: false, readonly: false, formControlName: 'clientRegion', selectOptions: this.regionList, multiselect: false },
          { name: 'Industry', type: 'select', required: true, disbled: false, readonly: false, formControlName: 'industrySize', selectOptions: this.industries, multiselect: false },
          { name: 'Sector', type: 'select', required: true, disbled: false, readonly: false, formControlName: 'clientSector', selectOptions: this.sector, multiselect: false },
          { name: 'Size', type: 'number', required: true, disabled: false, readonly: false, formControlName: 'clientIndustry' },
        ] as ICustomFormControl[],
        formName: 'Client Details',
        formGroup: new AllForms().clientDetailsForm,
      },
      {
        formCtrl: [
          { name: 'Project Name', type: 'text', required: true, disbled: false, readonly: false, formControlName: 'projectName' },
          { name: 'Project Type', type: 'select', required: true, disbled: false, readonly: false, formControlName: 'projectType', selectOptions: this.projectType, multiselect: false },
          { name: 'Transaction Size', type: 'number', required: true, disabled: false, readonly: false, formControlName: 'projectTransactionSize' },
          { name: 'Project Manager', type: 'autocomplete', required: true, disbled: false, readonly: false, formControlName: 'projectManager', selectOptions: [], multiselect: false },
          { name: 'Project Leaders', type: 'autocomplete', required: true, disbled: false, readonly: false, formControlName: 'projectLeader', selectOptions: [], multiselect: false },
          { name: 'Purpose', type: 'textarea', required: true, disbled: false, readonly: false, formControlName: 'projectPurpose' },
          { name: 'Confidential', type: 'checkbox', required: true, disbled: false, readonly: false, formControlName: 'projectIsConfidential' },
        ] as ICustomFormControl[],
        formName: 'Project Details',
        formGroup: new AllForms().projectDetailsForm,
      }
    ]
    this.isFormEditable = Boolean(this.route.snapshot.paramMap.get('editable'));
    if (this.isFormEditable) {
      this.route
        .queryParams
        .subscribe(params => {
          this.projectFormList.forEach(form => {
            form.formGroup.patchValue(params)
          })
        });
    }
  }

  async getRegionsData() {
    await this.projectService.getRegionsList().toPromise().then(region => this.regionList = region)
  }

  async getIndustryData() {
    await this.projectService.getIndustryList().toPromise().then(industry => this.industries = industry)
  }

  async getSectorData() {
    await this.projectService.getSectorList().toPromise().then(sector => this.sector = sector)
  }

  async getProjectTypeData() {
    await this.projectService.getProjectTypeList().toPromise().then(pType => this.projectType = pType)
  }
}
