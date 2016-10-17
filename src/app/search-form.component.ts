 
import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

import { Booking } from './booking.interface';


  @Component({
  	 templateUrl: './search-form.component.html',
     styleUrls: ['./search-form.component.css'] ,
  })

export class SearchFormComponent implements OnInit{

    public myForm: FormGroup;  

    constructor(private router: Router, private formBuilder: FormBuilder){ }

    ngOnInit(){

        this.myForm = this.formBuilder.group({
          
          bookingcode: ['', [<any>Validators.required]],
          familyname: ['', [<any>Validators.required]] 

        }) 

    }

    save(model:Booking, isValid: boolean){
      
      if(typeof model.familyname !== 'undefined' ){
     
        this.router.navigate(['/search-result', model.familyname ]);
      }
    }

 }
