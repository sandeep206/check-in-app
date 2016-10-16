import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
 
import { SearchFormComponent }    from './search-form.component';
import { SearchResultComponent }    from './search-result.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
		{ path: '', component: SearchFormComponent },
		{ path: 'search-result/:name', component: SearchResultComponent } 

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}