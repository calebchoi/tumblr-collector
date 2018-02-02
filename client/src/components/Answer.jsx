import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Answer = props => (
  <div className="answer">
    <div className="answer-question">{props.question}</div>
    <div
      className="answer-answer"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.answer) }}
    />
  </div>
);

Answer.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Answer;
