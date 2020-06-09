import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AsyncValidator, FormControl} from '@angular/forms';

@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator{

    constructor(private http: HttpClientModule){
       
    }

    validate(control: FormControl){

        const { value } = control; 
        console.log(value);
        return null;

    }

        



}
