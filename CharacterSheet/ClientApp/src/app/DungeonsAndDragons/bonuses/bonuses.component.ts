import {Component, Inject} from '@angular/core';
import {SavingThrow} from "../saving-throw-standalone/saving-throw-standalone.component";
import * as http from "node:http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.css'],
  standalone: true
})
export class BonusesComponent {
  public information: Bonuses | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Bonuses>(apiUrl + 'Bonuses/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Bonuses {
  inspirations: number
  proficiency: number
}
