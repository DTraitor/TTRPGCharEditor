import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  standalone: true,
  imports: [
    NgIf,
  ],
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent {
  public information: SavingThrows | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<SavingThrows>(apiUrl + 'SavingThrows/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface SavingThrows {
  strength: number
  strength_prof: boolean
  dexterity: number
  dexterity_prof: boolean
  constitution: number
  constitution_prof: boolean
  intelligence: number
  intelligence_prof: boolean
  wisdom: number
  wisdom_prof: boolean
  charisma: number
  charisma_prof: boolean
  inspirations: number
  proficiency: number
}
