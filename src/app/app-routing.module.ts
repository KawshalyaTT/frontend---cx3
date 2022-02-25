import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTableComponent } from './shared-module/components/custom-table/custom-table.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: '**',
    component: CustomTableComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
