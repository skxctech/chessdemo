export enum Direction {
    X = 'x',
    Y = 'y',
    XY = 'xy',
    K = 'k'
}

export interface IControl {
    direction: Direction[];
    negativeDirection: boolean;
    jump: boolean;
    travelLimit: number;
}
