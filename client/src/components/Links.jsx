import React from 'react';
import PropTypes from 'prop-types';

const Links = props => (
  <div className="link">
    <div className="link-title">{props.title}</div>
    <a href={props.url} className="link-url" target="_blank">{props.url}</a>
  </div>
);

Links.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Links;
