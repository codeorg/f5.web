import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

//import {BidResolve} from './service/bid-resolve.service';
//import {CacheResolve} from './service/cache-resolve.service';
//import {RegComponent} from './web/reg.component';
import {ErrorComponent} from './web/error.component';
import {Http} from './service/http';

let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
useH = {useHash: true};

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: "sub", loadChildren: "es6-promise?,[name]!./sub/sub.module#SubModule" },


            // {
            //     path: 'reg',
            //     component: RegComponent,
            //     resolve: {
            //         bid: BidResolve,
            //         cache: CacheResolve
            //     }
            // },
            {path: '**', component: ErrorComponent}
    ],useH)
    ],
    exports: [
        RouterModule
    ],
    providers: [Http]
})
export class AppRouterModule {

}
