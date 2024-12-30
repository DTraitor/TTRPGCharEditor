import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-skill-standalone',
  templateUrl: './skill-standalone.component.html',
  styleUrls: ['./skill-standalone.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class SkillStandaloneComponent {
  @Input() information!: Skill;

  constructor() {
  }
}

export interface Skill {
  skillName: string
  value: number
  proficiency: boolean
}
