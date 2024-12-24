import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-looks',
  templateUrl: './looks.component.html',
  standalone: true,
  styleUrls: ['./looks.component.css']
})
export class LooksComponent {
  public information: Looks | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Looks>(apiUrl + 'Looks/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Looks {
  age: string
  height: string
  weight: string
  eyes: string
  skin: string
  hair: string
  allies: string
  backstory: string
  treasure: string
  additional: string
}
