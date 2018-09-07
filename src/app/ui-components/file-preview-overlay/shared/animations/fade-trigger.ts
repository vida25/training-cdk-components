import { animate, state, style, transition, trigger } from '@angular/animations';

import { ANIMATION_TIMINGS } from '../constants';

export const fadeTrigger = trigger('fade', [
  state('fadeOut', style({ opacity: 0 })),
  state('fadeIn', style({ opacity: 1 })),
  transition('* => fadeIn', animate(ANIMATION_TIMINGS))
]);
