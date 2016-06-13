import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Leaderboard extends Component {
  render() {
    return(
      <div className="table-view">
        <h2 className="page-title">FCC Leaderboard</h2>
        <hr/>
        <table className="ui celled padded table">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>Points in past 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
