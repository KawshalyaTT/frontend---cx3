import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IIndustry } from '../interfaces/industry';
import { IProjectData, ProjectData } from '../interfaces/project-details';
import { IProjectType } from '../interfaces/project-type';
import { IRegions } from '../interfaces/regions';
import { ISector } from '../interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getProjectsList(): Observable<IProjectData[]> {
    return this.http.get<IProjectData[]>('assets/json/projects.json')
      .pipe(
        map((data: any) =>
          data.data.map(
            (item: any) =>
              new ProjectData(item.id, item.name, item.projectTypeId, item?.purpose, item?.TransactionSize, item?.projManager, item?.projleader, item?.isConfidential, item.createdOn, item?.targetDetails)
          )
        )
      );
  }

  public getRegionsList(): Observable<IRegions[]> {
    return this.http.get<IRegions[]>('assets/json/regions.json')
      .pipe(map((data: any) => data.data));
  }

  public getIndustryList(): Observable<IIndustry[]> {
    return this.http.get<IIndustry[]>('assets/json/project-type.json')
      .pipe(map((data: any) => data.data));
  }

  public getSectorList(): Observable<ISector[]> {
    return this.http.get<ISector[]>('assets/json/sector.json')
      .pipe(map((data: any) => data.data));
  }

  public getProjectTypeList(): Observable<IProjectType[]> {
    return this.http.get<IProjectType[]>('assets/json//project-type.json')
      .pipe(map((data: any) => data.data));
  }

}
