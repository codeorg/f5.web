import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ErrorComponent} from './web/error.component';

//import {Http} from './common/http';

let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
    useH = {useHash: true};
}
useH = {useHash: true};

@NgModule({
    imports: [
        RouterModule.forRoot([
            //{path: "sub", loadChildren: "es6-promise?,[name]!./sub/sub.module#SubModule" },
            {path: '**', component: ErrorComponent}
    ],{useHash: true})
    ],
    exports: [
        RouterModule,
        //ErrorComponent //必须输出
    ],
    declarations:[ErrorComponent],
    providers: []
})
export class AppRouterModule {

}
