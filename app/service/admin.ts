/**
 * Created by Administrator on 2016/10/21.
 */
import {Injectable,Inject,ReflectiveInjector  } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {HttpProvider} from './http-provider';


@Injectable()
class Engine {
}
@Injectable()
class Car {
    constructor(public engine:Engine) {
    }
    test(){
        console.log("test");
    }
}
export class Admin extends HttpProvider{
    private router:Router;
    constructor() {
       super();
        var injector = ReflectiveInjector.resolveAndCreate([Car,Engine])
        injector.get(Car).test();


// //@Inject(Router) _router:Router,@Inject(Http) _http:Http
//         injector.get(Car).test();
//         //this.http=

        this.create("web");
    }
    httpHandle(response:any){
        if(response.err==401) this.router.navigate(['/user/test1']);
    }
}

