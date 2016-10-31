/**
 * Created by Administrator on 2016/10/21.
 */
import {Injectable,ReflectiveInjector ,Injector} from '@angular/core';
import {Http as HTTP} from '@angular/http';
//import {MockBackend} from '@angular/http/testing';
import {Router} from '@angular/router';
import {HttpProvider} from './http-provider';


@Injectable()
export class Http extends HttpProvider{
    private router:Router;
    constructor(private _router:Router,private _http:HTTP) {
        super();
        this.router=_router;


        this.http=_http;
        this.create("web");
    }
    httpHandle(response:any){
        if(response.err==401) this.router.navigate(['/']);
    }
}

