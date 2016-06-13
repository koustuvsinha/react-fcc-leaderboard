import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
require("./sass/main.scss");
import $ from 'jquery'
import Calculator from './views/calculator'

class CalculatorView extends Component {
    render() {
        return (
            <div>
                <div className="ui raised very padded text container segment">
                    <Calculator/>
                </div>
                <div className="ui container text">
                <hr/>
                <span className="footer">
                    Built with <a href="https://facebook.github.io/react/index.html">React</a>, <a href="https://github.com/mobxjs/mobx">Mobx</a> & <a href="http://semantic-ui.com/">Semantic-UI</a>
                </span>
                </div>
            </div>
        )
    }
}




ReactDOM.render(<CalculatorView/>, document.getElementById('root'));