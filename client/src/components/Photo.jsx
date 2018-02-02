import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Photo = props => (
  <div className="photo">
    {props.photos.map((photo, idx) => {
      const key = `${props.id}(${idx})`;
      return (
        <img
          src={photo.original_size.url}
          alt="Content"
          key={key}
        />
      );
    })}
    <div
      className="photo-caption"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.caption) }}
    />
  </div>
);

Photo.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Photo;
