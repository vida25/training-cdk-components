import {Component, EventEmitter, HostListener, Inject, OnInit} from '@angular/core';
import { FILE_PREVIEW_DIALOG_DATA } from '../shared/services/file-preview-dialog-data';
import { FilePreviewOverlayRef } from '../shared/models/file-preview-overlay-ref';
import { fadeTrigger, slideContentTrigger } from '../shared/animations';

const ESCAPE = 27;

@Component({
  selector: 'act-file-preview-overlay-modal',
  templateUrl: './file-preview-overlay-modal.component.html',
  styleUrls: ['./file-preview-overlay-modal.component.scss'],
  animations: [fadeTrigger, slideContentTrigger]
})
export class FilePreviewOverlayModalComponent implements OnInit {

  loading = true;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  // TODO fix problem with apply AnimationEvent Interface;
  animationStateChanged = new EventEmitter<any>();

  constructor(
    public dialogRef: FilePreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) {}

  ngOnInit() {}

  @HostListener('document:keydown', ['$event'])
  private handleKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE) {
      this.dialogRef.close();
    }
  }

  onLoad() {
    this.loading = false;
  }

  onAnimationStart(event) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = 'leave';
  }

}
