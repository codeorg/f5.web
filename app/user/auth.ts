import { Injectable }       from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
}                           from '@angular/router';
//import { AuthService }      from './auth.service';
import {utility} from '../common/utility'
@Injectable()
export class Auth implements CanActivate, CanActivateChild, CanLoad {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isLogin();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        return this.isLogin();
    }

    isLogin(): boolean {
        let user=utility.ls.get('user');
        if(!user) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}

