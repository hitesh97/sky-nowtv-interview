import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import App from './App';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([]);
const storeStateMock = {
  myReducer: {
    someState: 'ABC'
  }
};

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

describe('<App />', () => {
  it('should render without crashing', () => {
    renderApp(AppComponent(noop, noop));
  });

  it('should contain title ', () => {
    const x = renderApp(AppComponent(noop, noop));
    expect(x.innerHTML).toContain('Sky NowTV Test');
  });

  it('should shallow render app', () => {
    const store = mockStore(storeStateMock);
    const x = shallow(<App store={store} />).shallow();
    const title = <h1>Sky NowTV Test</h1>;
    expect(x.find('h1').length).toEqual(1);
    expect(x.contains(title)).toEqual(true);
  });
});
