import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './pages/overlay-opener-page/overlay-opener-page.module#OverlayOpenerPageModule',
  },
  {
    path: 'manage-files', loadChildren: './pages/manage-files/manage-files.module#ManageFilesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
