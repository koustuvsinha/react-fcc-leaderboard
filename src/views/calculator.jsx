import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DisplayBoard from './displayBoard'
import CalculatorPad from './calculatorPad'
import boardState from '../utils/BoardState'

export default class Calculator extends Component {
	render() {
        return (
            <div className="section">
                <h2 className="page-title">JavaScript Calculator</h2>
                <hr/>
                <DisplayBoard boardState={boardState}/>
                <CalculatorPad boardState={boardState}/>
            </div>
        )
    }
}