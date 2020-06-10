import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqueUsername} from '../validators/unique-username';
import { MatchPassword } from '../validators/match-password';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({

    //first array validator for synchrone validator, second array for asyn validator
    username: new FormControl('',
    [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z0-9]+$/)],
    [this.uniqueUsername.validate]),
    password: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),

  },
  {validators:[this.matchPass.validate]}
  );
  



  constructor(
    private matchPass: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.authForm.invalid){
      return
    }else{
      //console.log(this.authForm.value);
      this.authServ.signup(this.authForm.value).subscribe({
        next: response=>{
            //navigate to some other route
            
        },
        error: (err)=>{
          if(!err.status){
            this.authForm.setErrors({ noConnection: true })
          }else{
            this.authForm.setErrors({ unknowerror: true })
          }
          
        }
      })
      this.authForm.reset();

    }
  }

}
