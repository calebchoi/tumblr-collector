import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
// import Feed from './components/Feed.jsx';
// import Favorite from './components/Favorite.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Search />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
