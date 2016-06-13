import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

var hiddenDiv = {
  display: 'none'
};

@observer
export default class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {loadingClass : '', nextType : 'All Time'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    if(this.props.tableState.currentType !== 'All Time') {
      this.props.tableState.fetchAllTimeUsers();
      this.setState({nextType : 'Recent (30 Days)'});
    } else {
      this.props.tableState.fetchRecentUsers();
      this.setState({nextType : 'All Time'});
    }
    this.setState({loadingClass: 'loading'});
  }
  componentWillReact() {
    this.setState({loadingClass : ''});
  }
  render() {
    return (
      <div className={`ui right floated fluid animated fade button ${this.state.loadingClass}`} onClick={this.handleChange}>
        <div className="visible content">{this.props.tableState.currentType}</div>
        <div className="hidden content">
          {this.state.nextType}
        </div>
      </div>
    );
  }
}
