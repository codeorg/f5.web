import {Routes} from "@angular/router";


import {RegOkComponent} from './reg-ok.component';
import {DefaultComponent} from './default.component';
import {FrameComponent} from './frame.component';
import {RegComponent} from './reg.component';

import {BidResolve} from '../common/bid-resolve.service';
import {CacheResolve} from '../common/cache-resolve.service';


export const WebRoutes: Routes = [
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
];
export const Declarations:any[]=[
    RegOkComponent,
    DefaultComponent,
    FrameComponent,
    RegComponent
];

export const Providers:any[]=[
    BidResolve,
    CacheResolve

];
