import { BallColour, GameEvent } from "../models/turn";

export function calculateScore(event: GameEvent) {
    if (event.foul) {
        return -1;
    }

    if (event.potted && event.colour === BallColour.Red) {
        return 1;
    }

    if (event.potted && event.colour === BallColour.Black) {
        return 3;
    }

    return 0;
}