import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectData } from 'src/app/dashboard/interfaces/project-details';
import { ITargetData } from '../../interfaces/target-details';
import { ExcelMappingComponent } from '../excel-mapping/excel-mapping.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public projectData: IProjectData;
  matDialogRef: MatDialogRef<ExcelMappingComponent>;


  constructor(private route: ActivatedRoute, private router: Router,private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.projectData = params as IProjectData;
      });
  }

  public editProject() {
    this.router.navigate(['dashboard/project-form', true], { queryParams: this.projectData })
  }

  public addNewTarget() {
    this.router.navigate(['dashboard/target-form', false]);
  }

  public editTarget(targetData: ITargetData) {
    this.router.navigate(['dashboard/target-form', true], { queryParams: targetData })
  }

  public uploadExcel(target: ITargetData) {
    this.matDialogRef = this.matDialog.open(ExcelMappingComponent, {
      data: { name: 'Hi' },
    });

    
    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        let name = "";
      }
    });
  }

}
