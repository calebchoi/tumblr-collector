import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

const Feed = props => (
  <div className="feed">
    {props.feed.map(post => (
      <Post
        type={post.type}
        post={post}
        addOrRemove={props.addFavorite}
        favorite={false}
        id={post.id}
        key={post.id}
      />
    ))}
  </div>
);

Feed.propTypes = {
  feed: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
};

export default Feed;
