import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientData } from 'src/app/dashboard/interfaces/client-details';
import { IProjectData, ProjectData } from 'src/app/dashboard/interfaces/project-details';
import { ProjectsService } from '../../services/projects.service';

export interface Project {
  projectData: ProjectData;
  clientData: ClientData;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public projectList: IProjectData[];


  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  private getProjectsData() {
    this.projectService.getProjectsList().subscribe((projList: IProjectData[]) => {
      this.projectList = projList;
    })
  }

  public addNewProject() {
    this.router.navigate(['project-form', false], { relativeTo: this.route });
  }

  public viewProjectDetails(projectData: ProjectData) {
    this.router.navigate(['project-details',], { queryParams: projectData, relativeTo: this.route });
  }

  public deleteProject(projectData: ProjectData) {

  }
}
