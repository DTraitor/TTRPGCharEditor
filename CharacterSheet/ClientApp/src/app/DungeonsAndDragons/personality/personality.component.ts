import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  standalone: true,
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent {
  public information: Personality | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Personality>(apiUrl + 'Personality/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Personality {
  traits: string
  ideals: string
  bonds: string
  flaws: string
}
