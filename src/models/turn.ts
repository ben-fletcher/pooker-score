export enum BallColour {
  Na = "",
  Red = "Red",
  Black = "Black",
}

export interface GameEvent {
  potted: boolean;
  foul?: boolean;
  colour: BallColour;
}

export interface Turn {
  score: number;
  event: GameEvent;
  ballIndex: number;
}

export interface BallTurn {
  ballIndex: number;
  playerEvents: {
    playerId: number;
    event: GameEvent;
  }[];
}
