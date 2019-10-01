
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Test extends Piece {
    constructor(data) {
        super({
            name: 'Test',
            icon: 'pawn',
            control: {
                direction: [Direction.Y, Direction.XY],
                negativeDirection: false,
                jump: false,
                travelLimit: 0,
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        if (super.move(data)) {

            return true;

        }

        return false;
    }
}
