import { create } from "zustand";
import { Player } from "../models/player";

interface GameState {
  players: Player[];
  addPlayer: (player: Player) => void;
}

const useGameStore = create<GameState>((set) => ({
  players: [],
  addPlayer: (player: Player) =>
    set((state) => ({ players: [...state.players, player] })),
}));

export default useGameStore;
