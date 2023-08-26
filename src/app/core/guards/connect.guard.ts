import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TokenService } from "../service/token.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ConnectGuard implements CanActivate{
    constructor(private tokenService: TokenService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const token=this.tokenService.getToken();
        if(token){
            return true
        }else{
            this.router.navigateByUrl('/seconnecter');
            return false;
        }
        
    }
}