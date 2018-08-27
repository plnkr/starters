// Shim the environment
import 'core-js/client/shim';

// Angular requires Zones to be pre-configured in the environment
import 'zone.js/dist/zone';

//main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

import './style.css';

platformBrowserDynamic().bootstrapModule(AppModule);
