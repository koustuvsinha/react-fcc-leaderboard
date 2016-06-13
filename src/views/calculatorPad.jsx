import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DisplayBoard from './displayBoard'
import Button from './button'

export default class CalculatorPad extends Component {
	render() {
        return (
            <div>
                <div className="row calculator-pad">
                	<div className="col-xs-3"><Button title="AC" type="cntrl" boardState={this.props.boardState}/></div>
                	<div className="col-xs-3"><Button title="CE" type="cntrl" boardState={this.props.boardState}/></div>
                	<div className="col-xs-3"><Button title="%" type="cntrl" boardState={this.props.boardState}/></div>
                	<div className="col-xs-3"><Button title="/" type="cntrl" boardState={this.props.boardState}/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="7" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="8" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="9" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="*" type="cntrl" boardState={this.props.boardState}/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="4" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="5" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="6" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="-" type="cntrl" boardState={this.props.boardState}/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="1" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="2" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="3" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="+" type="cntrl" boardState={this.props.boardState}/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="." type="cntrl" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="0" type="num" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="Ans" type="cntrl" boardState={this.props.boardState}/></div>
                    <div className="col-xs-3"><Button title="=" type="cntrl" boardState={this.props.boardState}/></div>
                </div>
            </div>
        )
    }
}