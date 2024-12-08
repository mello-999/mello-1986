import { Component } from "@angular/core";



@Component({
  selector:'app-counter',
  template:`
<h3>counter: {{ counter }}</h3>

<button (click)="increaseby(+1)">+1</button>
<button (click)= "resetcounter()">reset</button>
<button (click)="increaseby(-1)">-1</button>

  `
})
export class countercomponent {

 public counter: number = 10;

increaseby( value: number ):void {
  this.counter += value;
}

resetcounter() {
  this.counter = 10;
}





}
