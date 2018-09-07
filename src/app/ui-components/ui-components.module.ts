import { NgModule } from '@angular/core';
import { uiComponents } from './index';

@NgModule({
  imports: [
    ...uiComponents,
  ],
  exports: [...uiComponents]
})
export class UiComponentsModule { }
