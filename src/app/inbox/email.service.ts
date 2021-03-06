import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email';





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


  //GET EMAIL SSS
  getEmails(){
    return this.http.get<EmailSumary[]>(`${this.rootUrl}/emails`);
  }

  //GET EMAIL 
  getEmail(id: string){
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`)
  }


  //SEND EMAIL
  sendEmail(email: Email){
    return this.http.post<any>(`${this.rootUrl}/emails`,email)
  }





}
