import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  standalone: true,
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
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number
}
