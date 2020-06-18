import { Injectable } from '@angular/core';
import  { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {  Email }from  './email';
import { EmailService } from './email.service';

 
@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  
    constructor(

      private emailServ: EmailService 

    ) { }
  
  
    resolve(route: ActivatedRouteSnapshot, ){
      const {id} = route.params
      return this.emailServ.getEmail(id)

    }




}
