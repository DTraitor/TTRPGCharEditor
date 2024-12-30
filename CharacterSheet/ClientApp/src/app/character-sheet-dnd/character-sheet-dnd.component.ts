import { Component } from '@angular/core';
import {GeneralInformationComponent} from "../DungeonsAndDragons/general-information/general-information.component";
import {AttributesComponent} from "../DungeonsAndDragons/attributes/attributes.component";
import {SavingThrowsComponent} from "../DungeonsAndDragons/saving-throws/saving-throws.component";
import {SkillsComponent} from "../DungeonsAndDragons/skills/skills.component";

@Component({
  selector: 'app-character-sheet-dnd',
  templateUrl: './character-sheet-dnd.component.html',
  styleUrls: ['./character-sheet-dnd.component.css'],
  standalone: true,
  imports: [
    GeneralInformationComponent,
    AttributesComponent,
    SavingThrowsComponent,
    SkillsComponent,
  ]
})
export class CharacterSheetDndComponent {

}

