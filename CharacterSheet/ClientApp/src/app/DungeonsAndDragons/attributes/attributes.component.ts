import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {
  public information: Attributes | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Attributes>(apiUrl + 'Attributes/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Attributes {
  strength: number
  strength_bonus: number
  dexterity: number
  dexterity_bonus: number
  constitution: number
  constitution_bonus: number
  intelligence: number
  intelligence_bonus: number
  wisdom: number
  wisdom_bonus: number
  charisma: number
  charisma_bonus: number
}
