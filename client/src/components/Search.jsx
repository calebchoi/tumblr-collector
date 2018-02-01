import React from 'react';
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
    this.props.search(this.state.blogName, this.state.tag);
    e.preventDefault();
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
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
    );
  }
}

export default Search;
