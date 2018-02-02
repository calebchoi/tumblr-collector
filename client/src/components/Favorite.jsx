import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

const Favorite = (props) => {
  const { favorite } = props;
  return (
    <div className="favorite">
      <h1>Favorites:</h1>
      {Object.keys(favorite).map(id => (
        <Post
          type={favorite[id].type}
          post={favorite[id]}
          addOrRemove={props.removeFavorite}
          favorite={true}
          id={favorite[id].id}
          key={id}
        />
      ))}
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Favorite;
