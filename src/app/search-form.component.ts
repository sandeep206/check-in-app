 
import { Component } from '@angular/core'; 
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Booking } from './booking.interface';


@Component({
	 templateUrl: './search-form.component.html',
   styleUrls: ['./search-form.component.css'] ,
})

export class SearchFormComponent {

    public myForm : FormGroup;
    public submitted : boolean;
    public events : any[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private _fb : FormBuilder){

    }

    ngOnInit(){

      this.myForm = this._fb.group({
        
        bookingcode : ['', [<any>Validators.required]],
        familyname : ['', [<any>Validators.required]] 

      }) 

    }

    save(model:Booking, isValid: boolean){
      
      this.submitted = true;
     
      this.router.navigate(['/search-result', model.familyname ]);
       
    }

 }