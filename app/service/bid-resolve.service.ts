import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';

import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';
import { utility } from './utility';

@Injectable()
export class BidResolve implements Resolve<string> {
    constructor(private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        //let id = +route.params['id'];
        if(!utility.Bid){
            return utility.browserId();
        }else{
            return new Observable((ob:any)=>{
                ob.next(utility.Bid);
                ob.complete();
            })
        }

        // return utility.browserId().then(bid=>{
        //     if (bid) {
        //         console.log("browserId-resolve",bid)
        //         return bid;
        //     } else {
        //         this.router.navigate(['/error']);
        //         return "";
        //     }
        // })
    }
}

