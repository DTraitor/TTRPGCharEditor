import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  standalone: true,
  styleUrls: ['./money.component.css']
})
export class MoneyComponent {
  public information: Money | undefined;

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<Money>(apiUrl + 'Money/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}

interface Money {
  platinum: 2,
  gold: 2,
  electrum: 2,
  silver: 2,
  copper: 2
}
