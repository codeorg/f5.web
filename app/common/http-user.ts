/**
 * Created by Administrator on 2016/10/21.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {HttpProvider} from './http-provider';

@Injectable()
export class HttpUser extends HttpProvider{
    //private router:Router;
    constructor(private router:Router,private _http:Http) {
        super();
        //this.router=_router;
        this.http=_http;
        this.create("user");
    }
    httpHandle(response:any){
        if(response.err==401) this.router.navigate(['/']);
    }
}

