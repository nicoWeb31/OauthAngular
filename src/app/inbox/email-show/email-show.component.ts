import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs/operators';
import { Email } from '../email'




@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {


  email: Email 


  constructor(
    private route: ActivatedRoute,
    private emailServ: EmailService

  ) { 

    this.route.data.subscribe((data)=>{
    console.log("EmailShowComponent -> data", data)

    });

  }
    
    ngOnInit(): void {
      //console.log("EmailShowComponent -> route", this.route)
      //capure les params mis dans le rooterModule ici 'id ' use observable for autorefresh
      // this.route.params.subscribe(({id})=>{
      // //console.log("EmailShowComponent -> ngOnInit -> snapshot",snapshot.id)
      // this.emailServ.getEmail(id).subscribe(email =>{
      // console.log("EmailShowComponent -> ngOnInit -> email", email)
      // this.email = email  
      // })
    //})

    // avec pipe switch pour gerer les req 
    // this.route.params.pipe(
    //   switchMap(({id})=>{
    //     return this.emailServ.getEmail(id);
    //   })
    // ).subscribe(email=>{

    //   console.log("email", email)
    //   this.email = email
      
    // })

    
  }

}
