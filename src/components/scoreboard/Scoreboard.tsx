import { Table } from "react-bootstrap";
import useGameStore from "../../store/store";
import { Player } from "../../models/player";
import { BallTurn, Turn } from "../../models/turn";
import { useEffect, useState } from "react";

const Scoreboard = () => {
  const players = useGameStore((state) => state.players);
  const previousBallTurns = useGameStore((state) => state.previousBallTurns);
  const currentBallTurn = useGameStore((state) => state.currentBallTurn);
  const activePlayer = useGameStore((state) => state.activePlayer);
  return (
    <Table responsive bordered size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          {previousBallTurns.map((ballTurn) => (
            <th>{ballTurn.ballIndex}</th>
          ))}
          <th>{currentBallTurn.ballIndex}</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player: Player, index) => (
          <tr
            key={player.id}
            className={index === activePlayer ? "table-primary" : ""}
          >
            <td>{player.name}</td>
            <td>
              {player.turns
                .map((turn: Turn) => turn.score)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )}
            </td>
            {previousBallTurns.map((ballTurn) => (
              <PlayerBallTurn
                key={ballTurn.ballIndex}
                playerId={player.id}
                ballTurn={ballTurn}
              />
            ))}
            <PlayerBallTurn playerId={player.id} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const PlayerBallTurn = ({
  playerId,
  ballTurn,
}: {
  playerId: number;
  ballTurn?: BallTurn;
}) => {
  const currentBallTurn = useGameStore((state) => state.currentBallTurn);
  const [ballTurnAction, setBallTurnAction] = useState<string>("");

  useEffect(() => {
    const ballTurnToUse = ballTurn ?? currentBallTurn;
    const playerEvent = ballTurnToUse.playerEvents.find(
      (playerEvent) => playerEvent.playerId == playerId
    )?.event;
    if (!playerEvent) return;

    let playerBallTurnAction = "";
    if (playerEvent.potted) playerBallTurnAction = playerEvent.colour;
    else if (playerEvent.foul) playerBallTurnAction = "Foul";

    setBallTurnAction(playerBallTurnAction);
  }, [ballTurn, currentBallTurn]);

  return <td>{ballTurnAction}</td>;
};

export default Scoreboard;
