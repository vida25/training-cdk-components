import { animate, state, style, transition, trigger } from '@angular/animations';

import { ANIMATION_TIMINGS } from '../constants';

export const slideContentTrigger = trigger('slideContent', [
  state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
  state('enter', style({ transform: 'none', opacity: 1 })),
  state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
  transition('* => *', animate(ANIMATION_TIMINGS)),
]);
