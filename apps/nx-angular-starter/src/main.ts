import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        /*
         * Register the ServiceWorker as soon as the application is stable
         * or after 30 seconds (whichever comes first).
         */
        registrationStrategy: 'registerWhenStable:30000',
      })
    ),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
  // eslint-disable-next-line no-console
}).catch((err) => console.error(err));
