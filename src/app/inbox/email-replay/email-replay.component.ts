import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css']
})
export class EmailReplayComponent implements OnInit {

  email: Email
  showModal = false


  constructor(
    private emailServ : EmailService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(email: Email){

  }

}
