import { create } from "zustand";
import { Player } from "../models/player";
import { BallTurn, GameEvent } from "../models/turn";

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
  players: [],
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
