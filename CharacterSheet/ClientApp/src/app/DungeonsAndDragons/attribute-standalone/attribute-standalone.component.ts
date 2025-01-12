import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-attribute-standalone',
  templateUrl: './attribute-standalone.component.html',
  standalone: true,
  styleUrls: ['./attribute-standalone.component.css']
})
export class AttributeStandaloneComponent {
  @Input() information!: Attribute;

  constructor() {
  }
}

export interface Attribute {
  attributeName: string
  value: number
  bonus: number
}
