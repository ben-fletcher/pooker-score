import { Button } from "react-bootstrap";
import "./Calculator.css";
import { BallColour } from "../models/turn";
import useGameStore from "../store/store";
import Scoreboard from "../components/scoreboard/Scoreboard";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Calculator() {
    const navigate = useNavigate();
    const submitEvent = useGameStore((state) => state.submitEvent);
    const players = useGameStore((state) => state.players);

    useEffect(() => {
        if (players.length === 0) {
            navigate(import.meta.env.BASE_URL);
        }
    }, []);

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
