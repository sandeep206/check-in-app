import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    
    <p>Welcome {{name}}!!!</p>`
})
export class SearchResultComponent {

  name: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.name =  params['name'] );
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  }