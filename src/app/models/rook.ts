
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Rook extends Piece {
    constructor(data) {
        super({
            name: 'Rook',
            icon: 'rook',
            control: {
                direction: [Direction.Y, Direction.X],
                negativeDirection: true,
                jump: false,
                travelLimit: 0,
                upgradeable: false
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        return super.move(data);

    }
}
