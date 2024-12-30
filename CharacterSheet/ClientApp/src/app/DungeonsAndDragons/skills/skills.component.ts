import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {SkillStandaloneComponent, Skill} from "../skill-standalone/skill-standalone.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    SkillStandaloneComponent,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public information: Skill[];

  constructor(http: HttpClient, @Inject('DND_API') apiUrl: string) {
    this.information = [];
    http.get<Skill[]>(apiUrl + 'Skills/' + 0).subscribe(result => {
      this.information = result;
    }, error => console.error(error));
  }
}
