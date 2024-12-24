import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  standalone: true,
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent {
  public information: Weapon[] | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Weapon[]>(apiUrl + 'Weapons/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Weapon {
  name: string
  attack_bonus: number
  damage: string
  damage_type: string
}
