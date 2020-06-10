import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(
    
    private authServ: AuthService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    //signout
    //redirect
    this.authServ.signout().subscribe(()=>{
      //navigate to singnin component

      this.router.navigateByUrl('/');

    })
  }

}
