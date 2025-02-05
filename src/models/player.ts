import { Turn } from "./turn";

export type Player = {
  id: number;
  name: string;
  turns: Turn[];
};

export type Turn = {
  score: number;
  event: GameEvent;
  ballIndex: number;
};

export enum GameEvent {
  NULL,
  NON_BLACK,
  BLACK,
  FOUL,
}
