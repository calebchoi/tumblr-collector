import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Feed from './components/Feed.jsx';
import Favorite from './components/Favorite.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      favorites: {},
    };
  }

  search = (blogName, tag) => {
    axios.get('/search', {
        params: {
          blogName,
          tag,
        },
      })
      .then(results => {
        this.setState({
          feed: results.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addFavorite = (post, id) => {
    const { favorites } = this.state;
    const newFavorite = Object.assign({}, favorites);
    newFavorite[id] = post;
    this.setState({
      favorites: newFavorite,
    });
  }

  removeFavorite = (post, id) => {
    const { favorites } = this.state;
    const newFavorite = Object.assign({}, favorites);
    delete newFavorite[id];
    this.setState({
      favorites: newFavorite,
    });
  }

  render() {
    return (
      <div>
        <Search search={this.search} />
        <Feed feed={this.state.feed} addFavorite={this.addFavorite} />
        <Favorite favorite={this.state.favorites} removeFavorite={this.removeFavorite} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
