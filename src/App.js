import React from 'react';
import Navbar from './components/Navbar';
import Hotels from './components/Hotels';
import Apartments from './components/Apartments';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: accommodation,
    };
  }


  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hotels} />
          <Route exact path="/apartments" component={Apartments} />
        </Switch>
      </div>
    );
  }
}

export default App;
