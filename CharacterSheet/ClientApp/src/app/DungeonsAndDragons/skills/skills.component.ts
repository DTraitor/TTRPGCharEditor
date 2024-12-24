import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public information: Skills | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Skills>(apiUrl + 'Skills/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Skills {
  acrobatics: number
  animal_handle: number
  arcana: number
  athletics: number
  deception: number
  history: number
  insight: number
  intimidation: number
  investigating: number
  medicine: number
  nature: number
  perception: number
  performance: number
  persuasion: number
  religion: number
  sleight_of_hand: number
  stealth: number
  survival: number
  passive_wisdom: number
}
