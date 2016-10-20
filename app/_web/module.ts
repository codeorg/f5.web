import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
//import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { Default }    from './default';
import { Login }    from './login';

//import { HeroService } from './hero.service';
import { WebRouter } from './router';

@NgModule({
    imports: [
        CommonModule,
        WebRouter
    ],
    declarations: [
        Default,Login
        //HeroDetailComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //HeroService
    ]
})
export class WebModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */