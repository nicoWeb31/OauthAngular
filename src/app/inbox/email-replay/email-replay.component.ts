import { Component, OnInit,Input } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css']
})
export class EmailReplayComponent {

  @Input() email: Email
  showModal = false


  constructor(
    private emailServ : EmailService
  ) { }

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ')
    
    
    this.email = {
      /// on inverce les valeurs pour le reply
      ...this.email,
      from : this.email.to,
      to : this.email.from,
      subject: `RE : ${this.email.subject}`,
      text:`\n\n\n ----------- ${this.email.from} wrote:\n> ${text}`

    }
  }

  onSubmit(email: Email){

    this.emailServ.sendEmail(email).subscribe(()=>{

      this.showModal = false

    })

  }

}
