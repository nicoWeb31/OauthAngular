import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators{


    validate(formGroup: FormGroup){

        const { password, passwordConfirmation } = formGroup.value;

        if( password === passwordConfirmation){

            return null;

        }else{
            
            return {passWordsDontMatch : true};
            
        }
    }
            
}

        







