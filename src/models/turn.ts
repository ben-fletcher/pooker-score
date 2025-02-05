// export enum GameEvent {
//     PottedRed = "PottedRed",
//     PottedBlack = "PottedBlack",
//     FoulRed = "FoulRed",
//     FoulBlack = "FoulBlack",
//     OtherFoul = "OtherFoul",
//     Miss = "Miss"
// }
export enum BallColour {
    Na,
    Red,
    Black
}


export interface GameEvent {
    potted: boolean
    foul?: boolean;
    color: BallColour;
}

export interface Turn {
    score: number;
    event: GameEvent;
    ballIndex: number;
}