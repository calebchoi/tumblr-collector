import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Text = props => (
  <div className="text">
    <div className="text-title">{props.title}</div>
    <div
      className="text-body"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }}
    />
  </div>
);

Text.defaultProps = {
  title: 'Text',
};

Text.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
};

export default Text;
