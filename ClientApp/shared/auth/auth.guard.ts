import { Injectable } from '@angular/core';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

import { AuthenticationService } from './authentication.service'
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private _router: Router,
        private _authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //return this._authenticationService.authenticated().pipe(map(
        //    data => {
        //        if (data) {
        //            try {
        //                if (localStorage.getItem('currentUser')) {
        //                    return true;
        //                }
        //            }
        //            catch (e) {
        //                return false;
        //            }
        //        }
        //        this._router.navigate(['/**']);
        //        return false
        //    }));
           
        this._router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
