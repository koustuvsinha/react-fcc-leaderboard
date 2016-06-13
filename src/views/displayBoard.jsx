import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
export default class DisplayBoard extends Component {
	render() {
        return (
            <div className="ui input fluid">
                <input type="textbox" readOnly="readonly" className="display-board" value={this.props.boardState.sum}/>
            </div>
        )
    }
}