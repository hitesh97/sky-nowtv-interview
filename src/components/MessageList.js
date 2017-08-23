import React, { Component } from 'react';
import MessageItem from './MessageItem';

function notEmpty(xs) {
  return xs && xs.length > 0;
}

function compareMessageTimestamp(a, b) {
  if (a.timestamp < b.timestamp) {
    return -1;
  } else if (a.timestamp > b.timestamp) {
    return 1;
  } else {
    return 0;
  }
}

const unknownUser = userId => {
  return {
    id: userId,
    firstName: "Unknown",
    lastName: "User",
    email: "unknown email",
    avatar: "http://dummyimage.com/100x100.png/000000/ffffff",
    ip: "0.0.0.0"
  }
}

function lookupUserInMembers(members, userId) {
  return members.find(m => m.id === userId) || unknownUser(userId);
}

const renderEmpty = (
  <div>No messages found</div>
);

const renderMessageList = ({ messages, members }) => {
  const ms = messages.sort(compareMessageTimestamp);
  const lookupUser = lookupUserInMembers.bind(this, members || []);

  let user;

  return (
    <ul>
      {ms.map(x => {
        user = lookupUser(x.userId);

        return (
          <MessageItem
            key={x.id}
            text={x.message}
            email={user.email}
            avatar={user.avatar}
            timestamp={x.timestamp}
          />
        )
      })}
    </ul>
  );
};

class MessageList extends Component {
  render() {
    return (
      <div>
        {
          notEmpty(this.props.messages)
            ? renderMessageList(this.props)
            : renderEmpty
        }
      </div>
    )
  }
}


export default MessageList;
