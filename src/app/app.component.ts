import { Component, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('countNumber') count: ElementRef;
  
  onRunningGame(firedNumber: number) {
    console.log(firedNumber);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('in app controler the count is: '+this.count);
   }

}
