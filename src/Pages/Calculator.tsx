import { Button } from "react-bootstrap";
import "./Calculator.css";
import { BallColour } from "../models/turn";
import useGameStore from "../store/store";
import Scoreboard from "../components/scoreboard/Scoreboard";

const Calculator = () => {
  const submitEvent = useGameStore((state) => state.submitEvent);

  return (
    <div className="calculator-container">
      <div className="scoreboard-container">
        <Scoreboard />
      </div>
      <div className="button-container">
        <Button
          className="calc-button red-button"
          onClick={() => submitEvent({ color: BallColour.Red, potted: true })}
        >
          Red
        </Button>
        <Button
          className="calc-button black-button"
          onClick={() => submitEvent({ color: BallColour.Black, potted: true })}
        >
          Black
        </Button>
        <Button
          className="calc-button foul-button"
          onClick={() =>
            submitEvent({ color: BallColour.Na, potted: false, foul: true })
          }
        >
          Foul
        </Button>
        <Button
          className="calc-button miss-button"
          onClick={() => submitEvent({ color: BallColour.Na, potted: false })}
        >
          Miss
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
