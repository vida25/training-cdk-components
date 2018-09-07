import { InjectionToken } from '@angular/core';

import { Image } from '../interfaces/image';

export const FILE_PREVIEW_DIALOG_DATA = new InjectionToken<Image>('FILE_PREVIEW_DIALOG_DATA');
