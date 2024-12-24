import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  standalone: true,
  styleUrls: ['./feats.component.css']
})
export class FeatsComponent {
  public information: Feats | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Feats>(apiUrl + 'Feats/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Feats {
  other_prof_language: string
  features_traits: string
  equipment: string
}
