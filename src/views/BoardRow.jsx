import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
export default class BoardRow extends Component {
  componentWillReact() {
    console.log('component will react BoardRow');
    console.log(this.props.tableState.currentscope);
  }
  render() {
    return(
      <tbody>
      {
      this.props.tableState.currentscope.map((x,i)=>
      <tr><td>{this.props.tableState.currentPage * this.props.tableState.pageSize + i}</td><td>
        <h4 className="ui image header">
          <img src={x.img} className="ui mini rounded image"/>
          <div className="content">{x.username}</div>
        </h4>
      </td>
      <td>{x.recent}</td><td>{x.alltime}</td></tr>
      )}
      </tbody>
    );
  }
}
