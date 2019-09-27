import { Component, OnInit } from '@angular/core';
import { Pawn } from 'src/app/models/pawn';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private boardSize = 8;

  public board = [];

  constructor() {
  }

  ngOnInit() {

    this.board = Array.from({length: this.boardSize}, (n, y) => {
      return Array.from({length: this.boardSize}, (n, x) => {
        return new Block(x, y);
      });
    });

    this.initDefault();

  }

  initDefault() {
    this.board[1].forEach(block => {
      block.piece = new Pawn({player: 1});
    });
    this.board[6].forEach(block => {
      block.piece = new Pawn({player: 0});
    });
  }

  dragOver(e, block) {
    console.log('dragover');
  }

  dragEnter(e, block) {
    console.log('dragenter', block);
    block.active = true;
  }

  dragLeave(e, block) {
    console.log('dragleave', block);
    block.active = false;
  }

}
