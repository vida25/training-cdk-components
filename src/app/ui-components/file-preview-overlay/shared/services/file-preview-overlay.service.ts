import {ComponentRef, Injectable, Injector, OnDestroy} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Location } from '@angular/common';

import { FilePreviewOverlayModule } from '../../file-preview-overlay.module';
import { FilePreviewOverlayModalComponent } from '../../file-preview-overlay-modal/file-preview-overlay-modal.component';
import { FilePreviewOverlayRef } from '../models/file-preview-overlay-ref';
import { SubscriptionLike } from 'rxjs';
import { FilePreviewDialogConfig } from '../interfaces/file-preview-dialog-config';
import {FILE_PREVIEW_DIALOG_DATA} from './file-preview-dialog-data';

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog',
  image: null,
};

@Injectable({
  providedIn: FilePreviewOverlayModule,
})
export class FilePreviewOverlayService implements OnDestroy {
  locationSubscription: SubscriptionLike;
  // Inject overlay service
  constructor(
    private overlay: Overlay,
    private location: Location,
    private injector: Injector,
  ) { }

  private subscribeLocationOnNext(dialogRef) {
    this.locationSubscription = this.location.subscribe((event) => {
      dialogRef.close();
    });
  }

  open(config: FilePreviewDialogConfig = {}) {
    const mergedConfig = {...DEFAULT_CONFIG, ...config};

    const dialogConfig = this.getOverlayConfig(mergedConfig);
    const overlayRef = this.overlay.create(dialogConfig);

    const dialogRef = new FilePreviewOverlayRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(overlayRef, mergedConfig, dialogRef);

    dialogRef.componentInstance = overlayComponent;
    // overlayRef.attach(filePreviewPortal);
    overlayRef.backdropClick().subscribe(() => dialogRef.close());

    this.subscribeLocationOnNext(dialogRef);

    return dialogRef;
  }

  unsubscribeLocation() {
    this.locationSubscription.unsubscribe();
  }

  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private createInjector(config: FilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(FilePreviewOverlayRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.image);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: FilePreviewDialogConfig, dialogRef: FilePreviewOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(FilePreviewOverlayModalComponent, null, injector);
    const containerRef: ComponentRef<FilePreviewOverlayModalComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  ngOnDestroy() {
    this.unsubscribeLocation();
  }
}
