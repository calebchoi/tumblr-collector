import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      blogName: '',
      tag: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (this.state.blogName === '') {
      alert('Blog Name is Required!');
    } else {
      this.props.search(this.state.blogName, this.state.tag);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label htmlFor="blogName">
            Blog Name:
            <input
              className="search-blogName"
              name="blogName"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="tag">
            Tag:
            <input
              className="search-tag"
              name="tag"
              onChange={this.handleChange}
            />
          </label>

          <button className="search-submit">Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
}

export default Search;
