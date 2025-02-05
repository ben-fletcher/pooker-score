import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Calculator.css';
import { GameEvent } from '../models/turn';
import useGameStore from '../store/store';

const Calculator = () => {
    const submitEvent = useGameStore((state) => state.submitEvent);

    return (
        <div className="calculator-container">
            <div style={{ borderRadius: '1px solid black', width: "100vw", height: "80%" }}></div>
            <div className="button-container">
                <Button className="calc-button red-button" onClick={() => submitEvent(GameEvent.PottedRed)}>Red</Button>
                <Button className="calc-button black-button" onClick={() => submitEvent(GameEvent.PottedBlack)}>Black</Button>
                <Button className="calc-button foul-button" onClick={() => submitEvent(GameEvent.FoulRed)}>Foul</Button>
                <Button className="calc-button miss-button" onClick={() => submitEvent(GameEvent.Miss)}>Miss</Button>
            </div>
        </div>
    );
};

export default Calculator;