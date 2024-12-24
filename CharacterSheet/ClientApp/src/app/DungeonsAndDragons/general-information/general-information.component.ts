import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  standalone: true,
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent {
  public information: TopSide | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<TopSide>(apiUrl + 'TopSide/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }

  protected readonly JSON = JSON;
}

interface TopSide {
  name: string;
  player: string;
  classes: DndClass[];
  background: Background;
  race: Race;
  alignment: Alignment;
  experience: number;
  inspirations: number;
  proficiency: number;
}

interface DndClass {
  name: string
  description: string
  level: number
}

interface Background {
  name: string
  description: string
}

interface Race {
  name: string
  description: string
}

enum Alignment {
  LawfulGood,
  NeutralGood,
  ChaoticGood,
  LawfulNeutral,
  TrueNeutral,
  ChaoticNeutral,
  LawfulEvil,
  NeutralEvil,
  ChaoticEvil
}
