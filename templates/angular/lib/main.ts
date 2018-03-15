// Shim the environment
import 'core-js/client/shim';

// Angular requires Zones to be pre-configured in the environment
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';

//main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.js';

platformBrowserDynamic().bootstrapModule(AppModule);
