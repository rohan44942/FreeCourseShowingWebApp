import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { NgModel } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    NgModel,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
};
