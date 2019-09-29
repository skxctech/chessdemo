import { IPiece, IMoveData } from '../interfaces/piece';
import { IControl } from '../interfaces/control';

export class Piece implements IPiece {
    name: string;
    icon: string;
    player: number;
    control: IControl;
    move(data: IMoveData): boolean {
        return true;
    };
    constructor(data) {
        this.name = data.name;
        this.icon = data.icon;
        this.player = data.player;
        this.control = data.control;
    }
}
