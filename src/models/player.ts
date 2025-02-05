import { Turn } from "./turn";

export type Player = {
  id: number;
  name: string;
  turns: Turn[];
};
