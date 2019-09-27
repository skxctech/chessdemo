import { Control } from './control';

export interface Piece {
    name: string;
    icon: string;
    player: number;
    control: Control;
}
