import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFilesRoutingModule } from './manage-files-routing.module';
import { ManageFilesComponent } from './manage-files.component';
import { FilePreviewOverlayModule } from '../../ui-components';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FilePreviewOverlayModule,
    ManageFilesRoutingModule
  ],
  declarations: [ManageFilesComponent],
})
export class ManageFilesModule { }
