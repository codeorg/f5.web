import {Routes} from "@angular/router";

import {AccountInfoComponent} from './account-info.component';
import {RateComponent} from './rate.component';
import {DefaultComponent}       from './default.component';
import {FrameComponent}     from './frame.component';
import {RequestWithdrawComponent}     from './request-withdraw.component';
import {WithdrawLogComponent}     from './withdraw-log.component';
import {CardComponent}     from './card.component';
import {EpayComponent}     from './epay.component';

import {BidResolve,CacheResolve}     from '../common';

import {Auth} from './auth';

export const UserRoutes: Routes = [{
    path: 'user',
    component: FrameComponent,
    canActivate:[Auth],
    resolve: {
        bid: BidResolve,
        cache: CacheResolve
    },
    children: [
        {
            path: '',
            component: DefaultComponent
        },
        {
            path: 'account_info',
            component: AccountInfoComponent
        },
        {
            path: 'rate',
            component: RateComponent
        },
        {
            path: 'request_withdraw',
            component: RequestWithdrawComponent
        },
        {
            path: 'withdraw_log',
            component: WithdrawLogComponent
        },
        {
            path: 'card',
            component: CardComponent
        },
        {
            path: 'epay',
            component: EpayComponent
        }
        
    ]
}
];
export const Declarations:any[]=[
    DefaultComponent,
    AccountInfoComponent,
    RateComponent,
    RequestWithdrawComponent,
    WithdrawLogComponent,
    CardComponent,
    EpayComponent,
    FrameComponent
];

export const Providers:any[]=[Auth,BidResolve,CacheResolve];


