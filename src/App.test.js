import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function noop() {}

function fakeApp(getChatLog, getMembersList) {
  return (
    <App.WrappedComponent
      getChatLog={getChatLog}
      getMembersList={getMembersList}
    />
  );
}

function renderApp(app) {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
  return div;
}

it('should render without crashing', () => {
  renderApp(fakeApp(noop, noop));
});
