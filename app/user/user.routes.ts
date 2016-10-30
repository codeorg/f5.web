import {Routes} from "@angular/router";

import {AccountInfoComponent} from './account-info.component';
import {Test2Component} from './test2.component';
import {DefaultComponent}       from './default.component';
import {FrameComponent}     from './frame.component';
import {Auth} from './auth';

export const UserRoutes: Routes = [{
    path: 'user',
    component: FrameComponent,
    canActivate:[Auth],
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
            path: 'test2',
            component: Test2Component
        }
    ]
}
];
export const Declarations:any[]=[
    DefaultComponent,
    AccountInfoComponent,
    Test2Component,
    FrameComponent
];

export const Providers:any[]=[Auth];


