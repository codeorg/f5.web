import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegComponent} from './web/reg.component';
import {ErrorComponent} from './web/error.component';

let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
useH = {useHash: true};

@NgModule({
    imports: [RouterModule.forRoot([
            {path: "sub", loadChildren: "es6-promise?,[name]!./sub/sub.module#SubModule" },
            {path: 'reg', component: RegComponent},
            {path: '**', component: ErrorComponent}
    ])
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRouterMoudule {

}
