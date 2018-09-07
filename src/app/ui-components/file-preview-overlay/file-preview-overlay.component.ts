import { Component, Input } from '@angular/core';
import { FilePreviewOverlayService } from './shared/services/file-preview-overlay.service';

@Component({
  selector: 'act-file-preview-overlay',
  templateUrl: './file-preview-overlay.component.html',
  styleUrls: ['./file-preview-overlay.component.scss']
})
export class FilePreviewOverlayComponent {

  @Input() file;

  constructor(
    private filePreviewOverlayService: FilePreviewOverlayService
  ) {}

  openOverlay() {
    this.filePreviewOverlayService.open({image: this.file});
  }

}
