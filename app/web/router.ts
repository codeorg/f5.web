import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Test1} from './test1';
import {Test2} from './test2';
import {Default} from './default';
import {Frame} from './frame';
import {Error} from './error';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: Frame,
            children: [
                {
                    path: '',
                    component: Default
                },
                {
                    path: 'test1',
                    component: Test1
                },
                {
                    path: 'test2',
                    component: Test2
                }]
        }

    ]), RouterModule.forRoot([
        {path: '**', component: Error}
    ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //CrisisDetailResolve
    ]
})
export class Router {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */