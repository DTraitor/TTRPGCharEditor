import { Component } from '@angular/core';
import {GeneralInformationComponent} from "../DungeonsAndDragons/general-information/general-information.component";

@Component({
  selector: 'app-character-sheet-dnd',
  templateUrl: './character-sheet-dnd.component.html',
  styleUrls: ['./character-sheet-dnd.component.css'],
  standalone: true,
  imports: [GeneralInformationComponent]
})
export class CharacterSheetDndComponent {

}

