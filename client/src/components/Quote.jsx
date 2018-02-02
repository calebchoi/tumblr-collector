import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Quote = props => (
  <div className="quote">
    <div
      className="quote-text"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }}
    />
    <div
      className="quote-source"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.source) }}
    />
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Quote;
