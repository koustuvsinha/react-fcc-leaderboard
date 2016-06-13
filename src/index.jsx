import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
require("./sass/main.scss");
import $ from 'jquery'
import Leaderboard from './views/Leaderboard'

class LeaderboardView extends Component {
    render() {
        return (
            <div>
                <div className="ui raised very padded text container segment">
                    <Leaderboard/>
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




ReactDOM.render(<LeaderboardView/>, document.getElementById('root'));
