import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Video = props => (
  <div className="video">
    <div
      className="video-player"
      dangerouslySetInnerHTML={{ __html: props.player }}
    />
    <div
      className="video-caption"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.caption) }}
    />
  </div>
);

Video.propTypes = {
  player: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Video;
