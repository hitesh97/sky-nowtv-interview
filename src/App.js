import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageList from './components/MessageList';

import { getChatLog, getMembersList } from './service';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getChatLog();
    this.props.getMembersList();
  }

  render() {
    return (
      <div>
        <h1>Sky NowTV Test</h1>
        <MessageList
          messages={this.props.messages}
          members={this.props.members}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages || [],
    members: state.members || []
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMembersList, getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
