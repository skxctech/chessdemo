
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Pawn extends Piece {
    constructor(data) {
        super({
            name: 'Pawn',
            icon: 'pawn',
            control: {
                direction: [Direction.Y, Direction.XY],
                negativeDirection: false,
                jump: false,
                travelLimit: 1,
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        if (super.move(data)) {

            // block negative Y movement
            if (data.coords.dy - data.coords.sy < 0) {
                return false;
            }

            // permit XY movement only when conquering
            if (data.pathing.diagonal && !data.conquering) {
                return false;
            }
            if (data.conquering && data.pathing.normal) {
                return false;
            }

            return true;

        }

        return false;
    }
}
