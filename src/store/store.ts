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


    set((state) => {
      const updatedPlayers = state.players.map((player, index) =>
        index === state.activePlayer ? { ...player, turns: [...player.turns, newTurn] } : player
      );
      return { ...state, players: updatedPlayers };
    });

    // Update ball turn
    set((state) => {
      const newBallTurn = { ...state.currentBallTurn };
      newBallTurn.playerEvents.push({ playerId: state.activePlayer + 1, event });
      return { ...state, currentBallTurn: newBallTurn };
    });

    //If potted, then change ball turn and new index
    if (event.potted) {
      set((state) => {
        const newBallTurn = getDefaultBallTurn();
        newBallTurn.ballIndex = state.currentBallTurn.ballIndex + 1;
        return { ...state, currentBallTurn: newBallTurn, previousBallTurns: [...state.previousBallTurns, state.currentBallTurn] };
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
