import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
 
import { SearchFormComponent } from './search-form.component';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  
  declarations: [ AppComponent, SearchFormComponent, SearchResultComponent], 
  imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [ AppComponent ] 

})


export class AppModule { 
  
} 