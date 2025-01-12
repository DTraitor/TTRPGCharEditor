import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  public information: Health | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Health>(apiUrl + 'Health/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Health {
  armour: number
  initiative: number
  speed: number
  maxhp: number
  curhp: number
  temphp: number
  deathsave_suc: number
  deathsave_fail: number
  total_hitdice: string
  hitdice: string
}
