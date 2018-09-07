import { NgModule } from '@angular/core';

import { OverlayOpenerPageRoutingModule } from './overlay-opener-page-routing.module';
import { OverlayOpenerPageComponent } from './overlay-opener-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UiComponentsModule } from '../../ui-components/ui-components.module';

@NgModule({
  imports: [
    SharedModule,
    UiComponentsModule,
    OverlayOpenerPageRoutingModule
  ],
  declarations: [OverlayOpenerPageComponent],
  exports: [OverlayOpenerPageComponent]
})
export class OverlayOpenerPageModule { }
