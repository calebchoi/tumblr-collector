import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      blogName: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form className="search">
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

        <button
          className="search-submit"
          onSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}

export default Search;
