import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Button extends Component {

	constructor(props) {
		super(props);
		// bind this for props to work in the function
		this.updateBoard = this.updateBoard.bind(this);
	}

	render() {
        return (
            <button className="ui fluid secondary button calc-button" onClick={this.updateBoard}>{this.props.title}</button>
        )
  }

  propTypes = {
  	title: React.PropTypes.string.isRequired
  }

  updateBoard() {
  	switch(this.props.type) {
  		case 'num':
  			this.props.boardState.append(this.props.title);
  		break;
  		case 'cntrl':
  			switch(this.props.title) {
  				case 'CE':
  					this.props.boardState.pop();
  				break;
  				case 'AC':
  					this.props.boardState.clear();
  				break;
  				case '.':
  					this.props.boardState.dotFlag = true;
  				break;
  				case '+':
  				case '-':
  				case '*':
  				case '/':
  				case '=':
  				case '%':
  					this.props.boardState.addCommand(this.props.title);
  				break;
  			}
  		break;
  	}
  }
}