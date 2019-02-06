import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<{i: number}>();
  count;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  startTheGame() {
    setInterval(() => {
      this.count++;
      this.startGame.emit({ i: this.count});
      console.log(this.count);
    },
    this.count);
  }

}
