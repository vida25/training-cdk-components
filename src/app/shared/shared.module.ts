import { NgModule } from '@angular/core';

import { cdk } from './cdk';
import { internal } from './internal';
import { material } from './material';

@NgModule({
  imports: [
    ...internal,
    ...cdk,
    ...material,
  ],
  exports: [
    ...internal,
    ...cdk,
    ...material,
  ]
})
export class SharedModule { }
