import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PieceComponent } from './components/piece/piece.component';
import { BlockComponent } from './components/block/block.component';
import { ChessActionService } from './services/chess-action.service';
import { BoardService } from './services/board.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PieceComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChessActionService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
