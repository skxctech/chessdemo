export enum Direction {
    X = 'x',
    Y = 'y',
    XY = 'xy',
    XYT = 'xyt',
    K = 'k'
};

export interface Control {
    direction: Direction[];
    negativeDirection: boolean;
    travelLimit: number;
    upgradeable: boolean;
}