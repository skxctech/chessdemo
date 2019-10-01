
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Bishop extends Piece {
    constructor(data) {
        super({
            name: 'Bishop',
            icon: 'bishop',
            control: {
                direction: [Direction.XY],
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
