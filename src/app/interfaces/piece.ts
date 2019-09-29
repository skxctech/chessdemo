import { IControl } from './control';

export interface IMoveData {
    coords: {
        sx: number;
        sy: number;
        dx: number;
        dy: number;
    };
    blocked: boolean;
    conquering: boolean;
}

export interface IPiece {
    name: string;
    icon: string;
    player: number;
    control: IControl;
}
