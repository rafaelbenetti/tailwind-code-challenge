import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(protected router: Router) {}

     canActivate() {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}