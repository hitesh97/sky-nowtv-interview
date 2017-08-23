import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';


function fakeComp(text, email, avatar, timestamp) {
  return (
    <MessageItem
      text={text}
      email={email}
      avatar={avatar}
      timestamp={timestamp}
    />
  );
}

function renderMessageItem(comp) {
  const div = document.createElement('div');
  ReactDOM.render(comp, div);
  return div;
}

it('formats the timestamp', () => {
  const text = "some text"
      , email = "some email"
      , avatar = "some avatar"
      , timestamp = "2016-11-09T05:04:58Z"

  const x = renderMessageItem(fakeComp(text, email, avatar, timestamp));
  expect(x.innerHTML).toContain("Wed, 09 Nov 2016 05:04:58 GMT");
});
