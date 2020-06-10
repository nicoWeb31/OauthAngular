import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedin = false;
  title = 'auth';
  constructor(private authServ: AuthService){}


ngOnInit(){
  this.authServ.sinedin$.subscribe((sinedin) =>{
    this.signedin = sinedin
  });

  this.authServ.checkAuth().subscribe(()=>{});
}


}
