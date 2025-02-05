import { create } from "zustand";
import { Player } from "../models/player";
import { BallColour, BallTurn, GameEvent } from "../models/turn";

interface GameState {
  activePlayer: number;
  players: Player[];
  currentBallTurn: BallTurn;
  previousBallTurns: BallTurn[];
  addPlayer: (player: Player) => void;
  submitEvent: (event: GameEvent) => void;
  clearPlayers: () => void;
}

const getDefaultBallTurn = () => ({
  ballIndex: 0,
  playerEvents: [],
});

const useGameStore = create<GameState>((set) => ({
  activePlayer: 0,
  players: [
    {
      id: 0,
      name: "Callum",
      turns: [
        {
          score: 0,
          ballIndex: -1,
          event: { potted: false, colour: BallColour.Na },
        },
        {
          score: 1,
          ballIndex: 0,
          event: { potted: true, colour: BallColour.Red },
        },
      ],
    },
    {
      id: 1,
      name: "Jo",
      turns: [
        {
          score: -1,
          ballIndex: -1,
          event: { potted: false, colour: BallColour.Na, foul: true },
        },
      ],
    },
  ],
  currentBall: 0,
  currentBallTurn: getDefaultBallTurn(),
  previousBallTurns: [],
  addPlayer: (player: Player) =>
    set((state) => ({ players: [...state.players, player] })),
  submitEvent: (event: GameEvent) => {
    console.log(event);
  },
  clearPlayers: () => set((state) => ({ ...state, players: [] })),
}));

export default useGameStore;
