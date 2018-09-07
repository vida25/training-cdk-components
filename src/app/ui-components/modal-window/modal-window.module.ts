import { NgModule } from '@angular/core';

import { ModalWindowComponent } from './modal-window.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent]
})
export class ModalWindowModule { }
