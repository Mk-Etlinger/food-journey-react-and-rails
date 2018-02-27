import React, { Component } from 'react';
import Routes from './routes/Routes';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/grommet-css';
import './css/App.css';

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
