import {Routes} from '@angular/router';
import {ErrorComponent} from './web/error.component';

export const ROUTES: Routes = [
    {path: "sub", loadChildren: "es6-promise?,[name]!./sub/sub.module#SubModule" },
    { path: '**', component: ErrorComponent }
];

let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
useH = {useHash: true};
export const USEHASH:any = useH;
