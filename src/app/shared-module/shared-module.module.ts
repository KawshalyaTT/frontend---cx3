import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CustomStepperFormComponent } from './components/custom-stepper-form/custom-stepper-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    CustomTableComponent,
    CustomMenuComponent,
    CustomFormComponent,
    CustomStepperFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatListModule,
    MatSelectModule, 
    MatAutocompleteModule
  ],
  exports: [
    CustomTableComponent,
    CustomMenuComponent,
    CustomFormComponent,
    CustomStepperFormComponent,
  ]
})
export class SharedModuleModule { }
