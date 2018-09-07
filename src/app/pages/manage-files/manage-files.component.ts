import { Component, OnInit } from '@angular/core';
import { STATIC_FILE_DATE } from '../../ui-components/file-preview-overlay/shared/data/static-file-data';

@Component({
  selector: 'act-manage-files',
  templateUrl: './manage-files.component.html',
  styleUrls: ['./manage-files.component.scss']
})
export class ManageFilesComponent implements OnInit {
  files;
  constructor(
  ) {
    this.files = [...STATIC_FILE_DATE];
  }

  ngOnInit() {
  }
}
