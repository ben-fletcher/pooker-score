import { create } from "zustand";
import { Player } from "../models/player";
import { GameEvent } from "../models/turn";

interface GameState {
  activePlayer: Player | null;
  players: Player[];
  addPlayer: (player: Player) => void;
  submitEvent: (event: GameEvent) => void;
  clearPlayers: () => void;
}

const useGameStore = create<GameState>((set) => ({
  activePlayer: null,
  players: [],
  addPlayer: (player: Player) =>
    set((state) => ({ players: [...state.players, player] })),
  submitEvent: (event: GameEvent) => {
    console.log(event);
  },
  clearPlayers: () =>
    set((state) => ({ ...state, players: [] })),
}));

export default useGameStore;
