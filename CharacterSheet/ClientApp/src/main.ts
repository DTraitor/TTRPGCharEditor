import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getApiUrl() {
  return document.getElementsByTagName('base')[0].href + 'api/';
}

export function getDnDApi() {
  return getApiUrl() + 'DnDCharacter/';
}

const providers = [
  { provide: 'API_URL', useFactory: getApiUrl, deps: [] },
  { provide: 'DND_API', useFactory: getDnDApi, deps: [] },
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
