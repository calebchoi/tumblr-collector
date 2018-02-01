import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      type: this.props.type,
      post: this.props.post,
    };
  }

  handleClick = () => {
    this.props.addFavorite(this.state.post);
  }

  render() {
    return (
      <div className="post">
        {this.state.post.blog_name}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

Post.propTypes = {
  type: PropTypes.string.isRequired,
  post: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  addFavorite: PropTypes.func.isRequired,
};

export default Post;
