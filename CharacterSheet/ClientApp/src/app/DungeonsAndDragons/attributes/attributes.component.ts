import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  standalone: true,
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
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}
