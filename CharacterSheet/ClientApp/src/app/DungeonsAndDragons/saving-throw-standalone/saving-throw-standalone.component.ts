import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-saving-throw-standalone',
  templateUrl: './saving-throw-standalone.component.html',
  standalone: true,
  styleUrls: ['./saving-throw-standalone.component.css']
})
export class SavingThrowStandaloneComponent {
  @Input() information!: SavingThrow;

  constructor() {
  }
}

export interface SavingThrow {
  attributeName: string
  value: number
  proficiency: boolean
}
