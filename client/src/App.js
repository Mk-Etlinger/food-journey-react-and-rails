import React, { Component } from 'react';
import Routes from './navigation';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/grommet-css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
