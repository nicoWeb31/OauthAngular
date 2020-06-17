import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, skipWhile, tap } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router :Router,
    private authServ: AuthService){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServ.sinedin$.pipe(
      skipWhile( value => value === null),
      take(1),
      tap((authenticated)=>{
        if(!authenticated){
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
