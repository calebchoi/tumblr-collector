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

  search = () => {
    axios.get('/search')
      .then(results => {
        this.setState({
          feed: results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Search />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
