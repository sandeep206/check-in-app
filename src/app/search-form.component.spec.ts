
import { SearchFormComponent } from './search-form.component'; 
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
 

describe('Component: SearchFormComponent', () => {

    let formBuilder: FormBuilder;
    let component: SearchFormComponent; 
    let router: Router;

      beforeEach(() => {

       formBuilder = new FormBuilder();
       component = new SearchFormComponent(router, formBuilder); 
       component.ngOnInit();
     
      }); 

      it('should define a component with name SearchFormComponent', () => {

          expect(component).toBeDefined();

      });


      it('should be invalid with empty booking ID' , () => {

        component.myForm = formBuilder.group({
          bookingcode: ['', Validators.required],
          familyname: ['John Doe', Validators.required],
        });

        expect(component.myForm.invalid).toBeTruthy(); 
      });    

      it('should be invalid with empty family name ' , () => {

        component.myForm = formBuilder.group({
          bookingcode: ['ABC111', Validators.required],
          familyname: ['', Validators.required],
        });

        expect(component.myForm.invalid).toBeTruthy();

      });

      it('should be invalid with both fields empty' , () => {

        component.myForm = formBuilder.group({
          bookingcode: ['', Validators.required],
          familyname: ['', Validators.required],
        });

        expect(component.myForm.invalid).toBeTruthy();

      });

      it('should be valid with both fields with data' , () => {

        component.myForm = formBuilder.group({
          bookingcode: ['ABC111', Validators.required],
          familyname: ['John Doe', Validators.required],
        });

        expect(component.myForm.valid).toBeTruthy();

      });

});
