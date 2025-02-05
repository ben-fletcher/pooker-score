import { create } from "zustand";
import { Player } from "../models/player";
import { BallTurn, GameEvent } from "../models/turn";
import { calculateScore } from "../Services/score.service"

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
    const newTurn = {
      event: event,
      ballIndex: useGameStore.getState().currentBallTurn.ballIndex,
      score: calculateScore(event),
    }

    console.log(newTurn)


    if (newTurn != null) {
      set((state) => {
        const updatedPlayers = state.players.map((player, index) =>
          index === state.activePlayer ? { ...player, turns: [...player.turns, newTurn] } : player
        );
        return { ...state, players: updatedPlayers };
      });
    }

    if (event.foul || !event.potted) {
      // Change active player
      set((state) => {
        const nextPlayer = state.activePlayer + 1;
        return { ...state, activePlayer: nextPlayer % state.players.length };
      });
    }
  },
  clearPlayers: () => set((state) => ({ ...state, players: [] })),
}));

export default useGameStore;
