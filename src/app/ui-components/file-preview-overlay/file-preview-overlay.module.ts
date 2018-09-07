import { NgModule } from '@angular/core';
import { Location } from '@angular/common';

import { FilePreviewOverlayComponent } from './file-preview-overlay.component';
import { FilePreviewOverlayModalComponent } from './file-preview-overlay-modal/file-preview-overlay-modal.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    FilePreviewOverlayComponent,
    FilePreviewOverlayModalComponent,
  ],
  exports: [FilePreviewOverlayComponent],
  providers: [ Location ],
  entryComponents: [FilePreviewOverlayModalComponent]
})
export class FilePreviewOverlayModule { }
