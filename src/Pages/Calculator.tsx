import { Button } from "react-bootstrap";
import "./Calculator.css";
import { BallColour } from "../models/turn";
import useGameStore from "../store/store";
import Scoreboard from "../components/scoreboard/Scoreboard";


export default function Calculator() {
    const submitEvent = useGameStore((state) => state.submitEvent);

    return (
        <div className="calculator-container">
            <span style={{ border: '5px solid black', width: "100%", height: "100%" }}></span>
            <div className="button-container">
                <Button className="calc-button red-button" onClick={() => submitEvent({color: BallColour.Red, potted: true})}>Red</Button>
                <Button className="calc-button black-button" onClick={() => submitEvent({color: BallColour.Black, potted: true})}>Black</Button>
                <Button className="calc-button foul-button" onClick={() => submitEvent({color: BallColour.Na, potted: false, foul: true})}>Foul</Button>
                <Button className="calc-button miss-button" onClick={() => submitEvent({color: BallColour.Na, potted: false})}>Miss</Button>
            </div>
        </div>
    );
};
