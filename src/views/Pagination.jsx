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
    this.state = {numPages : 0, pageArray : []};
    this.handleNavigation = this.handleNavigation.bind(this);
    this.addLeft = this.addLeft.bind(this);
    this.addRight = this.addRight.bind(this);
  }
  componentWillReact() {
    console.log('component will react');
    let numPages = this.props.tableState.numPages;
    var pArr = [];
    if(numPages <= 7) {
      pArr = [...Array(numPages).keys()];
    } else {
      pArr = [...Array(7).keys()];
    }
    this.setState({numPages : numPages, pageArray: pArr});
  }
  handleNavigation(pos) {
    this.props.tableState.populateScope(pos);
  }
  addLeft() {
    var pArr = this.state.pageArray;
    const first = pArr[0];
    if(first > 0) {
      pArr.unshift(first - 1);
      pArr.pop();
    }
    this.setState({pageArray: pArr});
    this.forceUpdate();
  }
  addRight() {
    var pArr = this.state.pageArray;
    const last = pArr[pArr.length - 1];
    if(last + 1 < this.props.tableState.numPages) {
      pArr.shift();
      pArr.push(last + 1);
    }
    this.setState({pageArray: pArr});
    this.forceUpdate();
  }
  render() {
    return(
        <tfoot className="full-width">
            <tr>
            <th colSpan="4">
              <div className="ui right floated pagination menu">
                <a className="icon item" onClick={this.addLeft}>
                  <i className="left chevron icon"></i>
                </a>
                {
                this.state.pageArray.map((x,i)=>
                  <div onClick={() => this.handleNavigation(x+1)}><a className="item">{x + 1}</a></div>
                )}
                <a className="icon item" onClick={this.addRight}>
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
