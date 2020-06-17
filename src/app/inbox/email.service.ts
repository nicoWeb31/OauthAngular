import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





interface EmailSumary {
  id: string,
  subject: string,
  from: string  


}


@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private rootUrl = 'https://api.angular-email.com';

  constructor(
    private http: HttpClient
  ) { }


  //GET EMAIL
  getEmails(){
    return this.http.get<EmailSumary[]>(`${this.rootUrl}/emails`)
  }





}
