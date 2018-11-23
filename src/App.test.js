import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function noop() {}

function AppComponent(getChatLog, getMembersList) {
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
  renderApp(AppComponent(noop, noop));
});

it('should contain title ', () => {
  const x = renderApp(AppComponent(noop, noop));
  expect(x.innerHTML).toContain('Sky NowTV Test');
});
