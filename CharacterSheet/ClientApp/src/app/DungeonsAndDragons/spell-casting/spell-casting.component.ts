import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-spell-casting',
  templateUrl: './spell-casting.component.html',
  standalone: true,
  styleUrls: ['./spell-casting.component.css']
})
export class SpellCastingComponent {
  public information: SpellPage[] | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<SpellPage[]>(apiUrl + 'Spells/0/0').subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface SpellPage {
  ClassName: string
  CastAttribute: string
  SaveAttribute: string
  AttackBonus: number
  SlotsMax: number[]
  SlotsUsed: number[]
  Spells: Spell[]
}

interface Spell {
  Name: string
  Level: number
}
