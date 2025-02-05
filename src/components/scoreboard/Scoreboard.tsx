import { Table } from "react-bootstrap";
import useGameStore from "../../store/store";
import { Player } from "../../models/player";
import { Turn } from "../../models/turn";

const Scoreboard = () => {
  const players = useGameStore((state) => state.players);
  return (
    <Table responsive bordered size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          {/* TODO: add dynamic ball/turns here */}
        </tr>
      </thead>
      <tbody>
        {players.map((player: Player) => (
          <tr>
            <td>{player.name}</td>
            <td>
              {player.turns
                .map((turn: Turn) => turn.score)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Scoreboard;
