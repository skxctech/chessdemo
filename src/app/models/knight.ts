
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Knight extends Piece {
    constructor(data) {
        super({
            name: 'Knight',
            icon: 'knight',
            control: {
                direction: [Direction.K],
                negativeDirection: true,
                jump: true,
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
