import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TargetFormComponent } from './components/target-form/target-form.component';
import { ExcelMappingComponent } from './components/excel-mapping/excel-mapping.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    DashboardComponent,
    ProjectFormComponent,
    ProjectDetailsComponent,
    TargetFormComponent,
    ExcelMappingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    GridModule,
    // ReactiveFormsModule,
    // MatDialogModule
  ],
})
export class DashboardModule { }
