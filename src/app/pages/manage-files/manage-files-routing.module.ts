import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageFilesComponent } from './manage-files.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: ManageFilesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class ManageFilesRoutingModule { }
