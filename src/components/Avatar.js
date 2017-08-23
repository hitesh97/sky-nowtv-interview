import React from 'react'
import PropTypes from 'prop-types'

const renderAvatarImage = url => (
  <img src={url} role='presentation' />
);

const renderMissingAvatar = renderAvatarImage('favicon.ico');

const Avatar = props => (
  <div className='message-avatar'>
    {props.url
      ? renderAvatarImage(props.url)
      : renderMissingAvatar
    }
  </div>
);

Avatar.propTypes = {
  url: PropTypes.string
}

export default Avatar;
