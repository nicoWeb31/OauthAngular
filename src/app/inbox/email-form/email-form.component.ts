import { Component, OnInit, Input  } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup

  @Input() email: Email;



  constructor() { }

  ngOnInit(): void {

    // const {subject, from ,to ,text } = this.email;
    console.log("EmailFormComponent -> ngOnInit -> this.email", this.email)
    
    this.emailForm = new FormGroup({
      to: new FormControl(this.email.to),
      from: new FormControl(this.email.from),
      subject: new FormControl(this.email.subject),
      text: new FormControl(this.email.text),

      

    })
  }

}
