import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Test1Component} from './test1.component';
import {Test2Component} from './test2.component';
import {DefaultComponent} from './default.component';
import {FrameComponent} from './frame.component';
import {ErrorComponent} from './error.component';
let useH = null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: FrameComponent,
            children: [
                {
                    path: '',
                    component: DefaultComponent
                },
                {
                    path: 'test1',
                    component: Test1Component
                },
                {
                    path: 'test2',
                    component: Test2Component
                }]
        }

    ]), RouterModule.forRoot([
        {path: '**', component: ErrorComponent}
    ], useH)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class WebRouterMoudule {

}
