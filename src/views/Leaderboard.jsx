import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BoardRow from './BoardRow';
import tableState from '../utils/TableState';
import Pagination from './Pagination';
import {observer} from 'mobx-react';

@observer
export default class Leaderboard extends Component {
  render() {
    return(
      <div className="table-view">
        <h2 className="page-title">FCC Leaderboard</h2>
        <hr/>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>Points in past 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <BoardRow tableState={tableState}/>
          <Pagination tableState={tableState}/>
        </table>
      </div>
    );
  }
}
