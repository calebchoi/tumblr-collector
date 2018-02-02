import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Chat = props => (
  <div className="chat">
    <div
      className="chat-dialogue"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.dialogue) }}
    />
  </div>
);

Chat.propTypes = {
  dialogue: PropTypes.string.isRequired,
};

export default Chat;
