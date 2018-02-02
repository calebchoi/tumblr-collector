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
          <div className="search-blogName">
            <label htmlFor="blogName">
              Blog Name:
            </label>
            <input
              name="blogName"
              onChange={this.handleChange}
            />
          </div>

          <div className="search-tag">
            <label htmlFor="tag">
              Tag:
            </label>
            <input
              name="tag"
              onChange={this.handleChange}
            />
          </div>

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
