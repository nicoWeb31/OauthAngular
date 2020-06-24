import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { BehaviorSubject, onErrorResumeNext} from 'rxjs';
import { tap } from 'rxjs/operators';

// interface debut

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

interface SingnedinResponse {
  authenticated: boolean,
  username: string

}

interface SigninCredentials{
  username: string;
  password: string;

}

interface SigninResponse {
  username: string
}




//interface fin 

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  
  
  username: string;
  sinedin$ = new BehaviorSubject(null);
  private url = 'https://api.angular-email.com';
  //private urlApi = 'http://api-extranet.com/oauth';



  constructor( private http: HttpClient) { }


  usernameAvailable(username: string){
     return this.http.post<usernameAvailableResponse>(`${this.url}/auth/username`,{
          username: username
     })
  }

  //signup
  signup(credetials: SignupCredential){

    return this.http.post<SignupResponse>(
      `${this.url}/auth/signup`,credetials
    )
    .pipe(
      tap(({username})=>{
        this.sinedin$.next(true);
        this.username = username
    }))

  }

  // Is signIn 
  checkAuth(){
    return this.http.get<SingnedinResponse>(`${this.url}/auth/signedin`)
    .pipe(
      tap(({ authenticated, username }) => {

        this.sinedin$.next(authenticated);
        this.username = username
        
      })
    )}


    //signout
    signout(){
      return this.http.post(`${this.url}/auth/signout`,{})
      .pipe(
        tap(()=>{
          this.sinedin$.next(false);
        })
      )
    }

    //signin
    signin(credentials :SigninCredentials){
      return this.http.post<SigninResponse>(`${this.url}/auth/signin`,credentials,{})
      .pipe(
        tap(({username})=>{
          this.sinedin$.next(true);
          this.username = username
        })
      )
    }


}
