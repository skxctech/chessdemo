export enum Direction {
    X = 'x',
    Y = 'y',
    XY = 'xy',
    K = 'k'
}

export enum Conquer {
    FW = 'fw',
    DG = 'dg',
    ALL = 'all'
}

export interface IControl {
    direction: Direction[];
    conquer: Conquer[];
    negativeDirection: boolean;
    jump: boolean;
    travelLimit: number;
    upgradeable: boolean;
}
