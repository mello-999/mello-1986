

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.sevice';

@Component({
  selector: 'app-DBZ-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent  {


  constructor( private dbzService: dbzService) {}


  get Character(): Character[] {
    return [...this.dbzService.character];
  }


  onDeleteCharacter( id: string ):void {
  this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter ( character: Character ):void {
  this.dbzService.AddCharacter( character );
  }




}
