import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProjectDetailsComponent } from "./components/project-details/project-details.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { TargetFormComponent } from "./components/target-form/target-form.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'project-form/:editable',
        component: ProjectFormComponent
    }, {
        path: 'project-details',
        component: ProjectDetailsComponent
    },{
        path:'target-form/:editable',
        component: TargetFormComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
