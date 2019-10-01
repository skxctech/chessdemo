import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public testItems: Observable<any[]>;

  constructor(
    public board: BoardService,
    public db: AngularFirestore
  ) {
    this.testItems = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.board.initDefault();
  }

}
