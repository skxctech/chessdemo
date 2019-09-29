import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/interfaces/piece';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {

  @Input() data: Piece;

  constructor() { }

  ngOnInit() {
  }

}
