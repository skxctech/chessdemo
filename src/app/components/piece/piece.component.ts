import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/models/piece';


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
