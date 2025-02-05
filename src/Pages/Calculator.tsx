import { Button } from "react-bootstrap";
import "./Calculator.css";
import { BallColour } from "../models/turn";
import useGameStore from "../store/store";
import Scoreboard from "../components/scoreboard/Scoreboard";

export default function Calculator() {
  const submitEvent = useGameStore((state) => state.submitEvent);

  return (
    <div className="calculator-container">
      <Scoreboard />
      <div className="button-container">
        <Button
          className="calc-button red-button"
          onClick={() => submitEvent({ colour: BallColour.Red, potted: true })}
        >
          Red
        </Button>
        <Button
          className="calc-button black-button"
          onClick={() =>
            submitEvent({ colour: BallColour.Black, potted: true })
          }
        >
          Black
        </Button>
        <Button
          className="calc-button foul-button"
          onClick={() =>
            submitEvent({ colour: BallColour.Na, potted: false, foul: true })
          }
        >
          Foul
        </Button>
        <Button
          className="calc-button miss-button"
          onClick={() => submitEvent({ colour: BallColour.Na, potted: false })}
        >
          Miss
        </Button>
      </div>
    </div>
  );
}
