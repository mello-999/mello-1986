import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

get capitalizedname(): string {
   return this.name.toUpperCase();
}
getHeroDescription(): string {
  return `${ this.name } - ${ this.age }`;
}
changeHero():void {
  this.name = 'Spiderman'
}
changeAge():void {
  this.age = 25;
}
Resetform():void {
 this.name = 'ironman';
 this.age = 45;
}



}
