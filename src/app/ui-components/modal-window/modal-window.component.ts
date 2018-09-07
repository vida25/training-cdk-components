import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output,
  ViewChild
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, share, startWith, switchMap, switchMapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'act-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnDestroy, OnInit {
  // TODO search for appropriate Interface;
  @Input() overlayOrigin: any;
  @Output() close = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();

  @ViewChild('dialog') dialog: ElementRef;
  isOpened = false;
  destroy$ = new Subject<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;

    // open popup if mouse stopped in overlayOriginEl (for short time).
    // If user just quickly got over overlayOriginEl element - do not open
    const open$ = fromEvent(overlayOriginEl, 'mouseenter')
      .pipe(
        filter(() => !this.isOpened),
        switchMap(enterEvent =>
          fromEvent(document, 'mousemove')
            .pipe(
              startWith(enterEvent),
              debounceTime(300),
              filter(event => overlayOriginEl === event['target']),
              share()
            )
        )
      );
    open$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.changeState(true))

    // close if mouse left the overlayOriginEl and dialog(after short delay)
    const close$ = fromEvent(document, 'mousemove')
      .pipe(
        debounceTime(100),
        filter(() => this.isOpened),
        filter(event => this.isMovedOutside(overlayOriginEl, this.dialog, event)),
      );

    open$
      .pipe(
        takeUntil(this.destroy$),
        switchMapTo(close$)
      )
      .subscribe(() => {
        this.changeState(false);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  connectedOverlayDetach() {
    this.changeState(false);
  }

  private changeState(isOpened: boolean) {
    this.isOpened = isOpened;
    isOpened ? this.open.emit() : this.close.emit();
    this.changeDetectorRef.markForCheck();
  }

  private isMovedOutside(overlayOriginEl, dialog, event): boolean {
    return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
  }
}
