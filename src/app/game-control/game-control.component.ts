import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() runningGame = new EventEmitter<{i: number}>();
  count: number;
  theInterval: any;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  startTheGame() {
    this.theInterval = setInterval(() => {
      this.runningGame.emit({ i: this.count});
      //console.log(this.count);
      this.count++;
    },
    this.count);
  }

  stopTheGame() {
    clearInterval(this.theInterval);
    console.log('the final number is: '+this.count)
  }

}
