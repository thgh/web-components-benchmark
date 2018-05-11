import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PascalTriangleModule } from './pascal-triangle.module';

platformBrowserDynamic()
    .bootstrapModule(PascalTriangleModule)
    .then(ref => {
        console.log('PascalTriangleModule boostraped');
    });
