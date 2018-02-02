import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Audio = props => (
  <div className="audio">
    <div
      className="audio-player"
      dangerouslySetInnerHTML={{ __html: props.player }}
    />
    <div
      className="audio-caption"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.caption) }}
    />
  </div>
);

Audio.propTypes = {
  player: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Audio;
