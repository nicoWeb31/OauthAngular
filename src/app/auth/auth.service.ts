import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


interface usernameAvailableResponse {
  available: boolean;
}

interface SignupCredential{
  username: string;
  password: string;
  passwordConfirmation: string

}

interface SignupResponse{
  username: string
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://api.angular-email.com'



  constructor( private http: HttpClient) { }


  usernameAvailable(username: string){
     return this.http.post<usernameAvailableResponse >(`${this.url}/auth/username`,{
          username: username
     })
  }

  //signup
  signup(credetials: SignupCredential){

    return this.http.post<SignupResponse>(
      `${this.url}/auth/signup`,credetials
    )
  }

}
