import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';
import Photo from './Photo.jsx';
import Video from './Video.jsx';
import Links from './Links.jsx';
import Quote from './Quote.jsx';
import Chat from './Chat.jsx';
import Answer from './Answer.jsx';
import Audio from './Audio.jsx';

const Post = (props) => {
  const {
    post,
    id,
    addOrRemove,
    favorite,
    type,
  } = props;

  const handleClick = () => {
    addOrRemove(post, id);
  };

  const renderContent = () => {
    if (type === 'text') {
      return <Text title={post.title} body={post.body} />;
    } else if (type === 'photo') {
      return <Photo photos={post.photos} caption={post.caption} id={id} />;
    } else if (type === 'quote') {
      return <Quote text={post.text} source={post.source} />;
    } else if (type === 'link') {
      return <Links title={post.title} url={post.url} />;
    } else if (type === 'chat') {
      return <Chat dialogue={post.body} />;
    } else if (type === 'audio') {
      return <Audio caption={post.caption} player={post.player} />;
    } else if (type === 'video') {
      return <Video caption={post.caption} player={(post.player[1]).embed_code} />;
    } else if (type === 'answer') {
      return <Answer question={post.question} answer={post.answer} />;
    } else {
      return <div>Invalid Post</div>;
    }
  };

  const renderButton = () => {
    if (favorite === false) {
      return <button className="add-favorite" onClick={handleClick}>Add</button>;
    } else {
      return <button className="remove-favorite" onClick={handleClick}>Remove</button>;
    }
  };

  return (
    <div className="post" id={props.id}>
      {renderContent()}
      {renderButton()}
    </div>
  );
};

Post.propTypes = {
  favorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  post: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  addOrRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
