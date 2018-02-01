import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
// import Feed from './components/Feed.jsx';
// import Favorite from './components/Favorite.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      favorites: [],
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

  render() {
    return (
      <Search search={this.search} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
