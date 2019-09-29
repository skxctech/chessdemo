import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/models/block';

import { ChessActionService } from 'src/app/services/chess-action.service';
import { Piece } from 'src/app/models/piece';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() data: Block;

  public movingPiece: Piece;

  constructor(private action: ChessActionService) { }

  ngOnInit() {
  }

  dragStart(e, block: Block) {
    this.action.source = block;
  }

  dragEnter(e, block) {
    e.preventDefault();
    block.active = true;
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragLeave(e, block) {
    e.preventDefault();
    block.active = false;
  }

  drop(e, block: Block) {
    block.active = false;
    this.action.destination = block;
    this.action.move();
  }

}
