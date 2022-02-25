import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomTableComponent } from "../shared-module/components/custom-table/custom-table.component";

const routes: Routes = [
    {
        path: '', component: CustomTableComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }