import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgFor, NgIf} from "@angular/common";
import {Attribute, AttributeStandaloneComponent} from "../attribute-standalone/attribute-standalone.component";
import {SkillStandaloneComponent} from "../skill-standalone/skill-standalone.component";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  standalone: true,
  imports: [
    AttributeStandaloneComponent,
    NgFor,
    NgIf,
    SkillStandaloneComponent
  ],
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {
  public information: Attribute[] = []

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Attribute[]>(apiUrl + 'Attributes/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}
