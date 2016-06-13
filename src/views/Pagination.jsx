import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

var hiddenDiv = {
  display: 'none'
};

@observer
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {numPages : 0};
  }
  componentWillReact() {
    console.log('component will react');
    console.log(this.props.tableState.numPages);
    this.setState({numPages : this.props.tableState.numPages});
  }
  render() {
    return(
        <tfoot className="full-width">
            <tr>
            <th colSpan="4">
              <div className="ui right floated pagination menu">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                {
                [...Array(this.state.numPages)].map((x,i)=>
                  <a className="item">{i}</a>
                )}
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
              <div style={hiddenDiv}>
                Pages : {this.props.tableState.numPages}
              </div>
            </th>
          </tr>
        </tfoot>
    );
  }
}
