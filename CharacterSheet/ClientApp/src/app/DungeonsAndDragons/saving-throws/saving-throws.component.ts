import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgFor, NgIf} from "@angular/common";
import {
  SavingThrow,
  SavingThrowStandaloneComponent
} from "../saving-throw-standalone/saving-throw-standalone.component";
import {AttributeStandaloneComponent} from "../attribute-standalone/attribute-standalone.component";

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  standalone: true,
  imports: [
    SavingThrowStandaloneComponent,
    NgFor,
    NgIf,
    AttributeStandaloneComponent,
  ],
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent {
  public information: SavingThrow[] = []

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    http.get<SavingThrow[]>(apiUrl + 'SavingThrows/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }

  protected readonly JSON = JSON;
}
