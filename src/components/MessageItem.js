import React from 'react'
import PropTypes from 'prop-types'

import './MessageItem.css';
import Avatar from './Avatar';

const renderTimestamp = ts => (
  <span className='message-timestamp'>{new Date(ts).toUTCString()}</span>
);

const renderText = text => (
  <div className='message-text'>{text}</div>
);

const renderEmail = email => (
  <span className='message-email'>{email}</span>
);

const MessageItem = ({ text, email, avatar, timestamp }) => (
  <li className='message-item' >
    <Avatar url={avatar} />
    <div className='message-content'>
      {renderTimestamp(timestamp)}
      {renderEmail(email)}
      {renderText(text)}
    </div>
  </li>
)

MessageItem.propTypes = {
    text: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    timestamp: PropTypes.string.isRequired
}

export default MessageItem;
