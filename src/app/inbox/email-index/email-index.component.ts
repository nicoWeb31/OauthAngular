import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service'

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {



  emails = [];

  constructor(
    private emailServ: EmailService
  ) { }

  ngOnInit(): void {
    this.emailServ.getEmails().subscribe((value)=>{
      this.emails = value;
    console.log("EmailIndexComponent -> ngOnInit -> value", value)

    })
  }

}
