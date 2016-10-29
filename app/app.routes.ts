import {Routes} from '@angular/router';
import {ErrorComponent} from './web/error.component';

export const ROUTES: Routes = [
    {path: "sub", loadChildren: "es6-promise?,[name]!./sub/sub.module#SubModule" },
    { path: '**', component: ErrorComponent }
];