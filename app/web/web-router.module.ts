import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {RegOkComponent} from './reg-ok.component';
import {DefaultComponent} from './default.component';
import {FrameComponent} from './frame.component';
import {RegComponent} from './reg.component';

import {BidResolve} from '../service/bid-resolve.service';
import {CacheResolve} from '../service/cache-resolve.service';

let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
useH = {useHash: true};

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: FrameComponent,
            resolve: {
                bid: BidResolve,
                cache: CacheResolve
            }
                 ,
            children: [
                {
                    path: '',
                    component: DefaultComponent
                },
                {
                    path: 'regOk',
                    component: RegOkComponent
                },
                {
                    path: 'reg',
                    component: RegComponent
                }]
        }

    ])
    ],
    exports: [
        RouterModule
    ],
    providers: [BidResolve,CacheResolve]
})
export class WebRouterMoudule {

}
