import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlayOpenerPageComponent } from './overlay-opener-page.component';

const routes: Routes = [
  {
    path: '', component: OverlayOpenerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayOpenerPageRoutingModule { }
