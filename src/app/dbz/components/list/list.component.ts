import { Component, EventEmitter, Input, Output, output,  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterlist: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  // onDelete = index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();




onDeleteCharacter(id?: string ):void {

if ( !id ) return;
this.onDelete.emit( id );
}

}






