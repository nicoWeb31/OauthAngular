import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor,HttpHandler,HttpRequest, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,filter } from 'rxjs/operators'


@Injectable()
export class AuthHttpIntercepor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        //modify or log the outgoing request 
        const modifiReq = req.clone({

            withCredentials:true

        })
        //console.log(req);
        return next.handle(modifiReq);

    }
}
