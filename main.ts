import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// bad comment

if (environment.production) {
  enableProdMode();
}

console.log('this shouldn\'t be here');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(rr => console.log(err));


