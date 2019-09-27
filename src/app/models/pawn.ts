import { Piece } from '../interfaces/piece';
import { Control, Direction } from '../interfaces/control';

export class Pawn implements Piece {
    name: string;
    icon: string;
    player: number;
    control: Control;
    constructor(data) {
        this.name = 'Pawn';
        this.icon = 'pawn';
        this.control = {
            direction: [Direction.X, Direction.XYT],
            negativeDirection: false,
            travelLimit: 1,
            upgradeable: true
        };
        this.player = data.player;
    }
}