import { Component } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent {
  public currentCount = 0;

  constructor(){
    this.currentCount = parseInt(localStorage.getItem('currentCount') || "0") || 0;
  }

  public incrementCounter() {
    this.currentCount++;
    localStorage.setItem('currentCount', this.currentCount.toString());
  }
}
