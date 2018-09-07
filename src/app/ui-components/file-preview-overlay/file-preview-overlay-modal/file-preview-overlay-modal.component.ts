import { Component, Inject, OnInit } from '@angular/core';
import { FILE_PREVIEW_DIALOG_DATA } from '../shared/services/file-preview-dialog-data';

@Component({
  selector: 'act-file-preview-overlay-modal',
  templateUrl: './file-preview-overlay-modal.component.html',
  styleUrls: ['./file-preview-overlay-modal.component.scss']
})
export class FilePreviewOverlayModalComponent implements OnInit {

  constructor(
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) {}

  ngOnInit() {
  }

}
