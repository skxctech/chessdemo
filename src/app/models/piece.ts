import { IPiece, IMoveData } from '../interfaces/piece';
import { IControl, Direction } from '../interfaces/control';

export class Piece implements IPiece {
    name: string;
    icon: string;
    player: number;
    control: IControl;
    constructor(data) {
        this.name = data.name;
        this.icon = data.icon;
        this.player = data.player;
        this.control = data.control;
    }

    move(data: IMoveData): boolean {

        // pathing match check
        // TODO messy, refactor
        if (data.pathing.diagonal && !this.control.direction.includes(Direction.XY)) {
            return false;
        }

        if (data.pathing.normal &&
            (!this.control.direction.includes(Direction.Y) &&
            !this.control.direction.includes(Direction.X))) {
            return false;
        }

        if (data.pathing.knight && !this.control.direction.includes(Direction.K)) {
            return false;
        }

        // check if pieces are jumped
        if (data.blocked && !this.control.jump) {
            return false;
        }

        // check travel limit
        if (this.control.travelLimit > 0) {


            let xDistance = data.coords.dx - data.coords.sx;
            if (xDistance < 0) { xDistance *= -1; }

            let yDistance = data.coords.dy - data.coords.sy;
            if (yDistance < 0) { yDistance *= -1; }

            if (xDistance > this.control.travelLimit || yDistance > this.control.travelLimit) {
                return false;
            }

        }

        return true;
    }
}
