
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Queen extends Piece {
    constructor(data) {
        super({
            name: 'Queen',
            icon: 'queen',
            control: {
                direction: [Direction.XY, Direction.X, Direction.Y],
                negativeDirection: true,
                jump: false,
                travelLimit: 0,
                upgradeable: false
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        // no jumping
        if (data.blocked && !this.control.jump) {
            return false;
        }

        return true;
    }
}
