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
    this.handleNavigation = this.handleNavigation.bind(this);
  }
  componentWillReact() {
    console.log('component will react');
    console.log(this.props.tableState.numPages);
    this.setState({numPages : this.props.tableState.numPages});
  }
  handleNavigation(pos) {
    this.props.tableState.populateScope(pos);
  }
  render() {
    return(
        <tfoot className="full-width">
            <tr>
            <th colSpan="4">
              <div className="ui right floated pagination menu">
                {
                [...Array(this.state.numPages)].map((x,i)=>
                  <div onClick={() => this.handleNavigation(i+1)}><a className="item">{i + 1}</a></div>
                )}
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
