export enum GameEvent {
    PottedRed = "PottedRed",
    PottedBlack = "PottedBlack",
    FoulRed = "FoulRed",
    FoulBlack = "FoulBlack",
    OtherFoul = "OtherFoul",
    Miss = "Miss"
}

export interface Turn {
    score: number;
    event: GameEvent;
    ballIndex: number;
}