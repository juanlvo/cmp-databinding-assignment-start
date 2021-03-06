import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() runningGame = new EventEmitter<number>();
  count: number;
  theInterval: any;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  startTheGame() {
    this.theInterval = setInterval(() => {
      this.runningGame.emit(this.count++);
    },
    1000);
  }

  stopTheGame() {
    clearInterval(this.theInterval);
    console.log('the final number is: '+this.count)
  }

}
