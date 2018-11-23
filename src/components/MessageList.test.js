import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';

function MessageListComponent(messages, members) {
  return <MessageList members={members} messages={messages} />;
}

function renderMessageList(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  return div;
}

describe('<MessageItem />', () => {
  it('defaults to "no messages" text', () => {
    const x = renderMessageList(MessageListComponent([], []));
    expect(x.innerHTML).toContain('No messages found');
  });

  it('renders messages on screen', () => {
    const expectedMessage = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    };
    const chatLog = [expectedMessage];
    const x = renderMessageList(MessageListComponent(chatLog, []));
    expect(x.innerHTML).toContain(expectedMessage.message);
  });

  it('renders messages in date order', () => {
    const chatLog = [
      {
        id: '1',
        userId: '4',
        message: 'second',
        timestamp: '2017-02-09T04:27:38Z'
      },
      {
        id: '2',
        userId: '5',
        message: 'first',
        timestamp: '2017-01-09T04:27:38Z'
      },
      {
        id: '3',
        userId: '6',
        message: 'third',
        timestamp: '2017-03-09T04:27:38Z'
      }
    ];

    const x = renderMessageList(MessageListComponent(chatLog, []));

    expect(x.innerHTML).toContain('first');
    expect(x.innerHTML).toContain('second');
    expect(x.innerHTML).toContain('third');

    const firstIndex = x.innerHTML.indexOf('first');
    const secondIndex = x.innerHTML.indexOf('second');
    const thirdIndex = x.innerHTML.indexOf('third');
    expect(firstIndex).toBeLessThan(secondIndex);
    expect(secondIndex).toBeLessThan(thirdIndex);
  });

  it('puts "unknown user" for unidentifiable users', () => {
    const expectedMessage = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    };
    const chatLog = [expectedMessage];
    const members = [];

    const x = renderMessageList(MessageListComponent(chatLog, members));
    expect(x.innerHTML).toContain('unknown email');
  });

  it('puts the user email next to the message', () => {
    const expectedMessage = {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    };
    const chatLog = [expectedMessage];

    const expectedMember = {
      id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      firstName: 'Martin',
      lastName: 'Bradley',
      email: 'mbradley0@google.it',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      ip: '166.124.172.160'
    };
    const members = [expectedMember];

    const x = renderMessageList(MessageListComponent(chatLog, members));
    expect(x.innerHTML).toContain(expectedMember.email);
  });
});
