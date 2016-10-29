import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';

import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';
import { utility } from './utility';
import { Http } from './http';

@Injectable()
export class CacheResolve implements Resolve<string> {
    constructor(private http:Http) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return new Observable((ob:any)=>{
            let bs=utility.ls.get('banksort');
            let cs=utility.ls.get('cardsort');
            if(!bs||!cs){
                this.http.cache.find().subscribe((res:any)=>{
                    utility.ls.set('banksort',res.data.banksort);
                    utility.ls.set('cardsort',res.data.cardsort);
                    console.log(typeof res.data)
                    ob.next(res.data);
                    ob.complete();
                })
            }else{
                console.log(typeof bs)
                ob.next({banksort:bs,cardsort:cs});
                ob.complete();
            }
        });
    }
}

