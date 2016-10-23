import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';

import { utility } from './utility';

@Injectable()
export class BidResolve implements Resolve<string> {
    constructor(private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Promise<string> {
        //let id = +route.params['id'];
        return utility.browserId().then(bid=>{
            if (bid) {
                console.log("browserId-resolve",bid)
                return bid;
            } else {
                this.router.navigate(['/error']);
                return "";
            }
        })
    }
}

