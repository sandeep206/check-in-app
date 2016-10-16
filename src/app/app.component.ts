import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [` 
  
  * { border-radius:0px; }
  h2 { font-weight: bold;}
  .form-banner{
      background-image: url(../assets/img/bg-image.png);
      background-repeat: repeat-x; 
      text-align: center;
      color: #fff; 
     }
  `],
  template: `
    <div class="container">
    <div class="panel panel-default ">
      <div class="panel-heading form-banner"> 
        CHECK-IN
      </div> 
    <div class="panel-body"> 
      <h2 class="text-center">RETRIVE YOUR BOOKING</h2> 
      <p>You can find your booking by filling out your family name and the booking code in your booking confirmation.</p>  
         <router-outlet></router-outlet>
    </div>
    </div>
    </div>
  `
}) 
 
export class AppComponent { }

 