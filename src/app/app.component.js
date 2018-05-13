import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home.component';
import CreateRoom from './createRoom.component';
import JoinRoom from './joinRoom.component';
import appBarHOC from './withAppBar';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/create' component={appBarHOC(CreateRoom)} />
            <Route path='/join' component={appBarHOC(JoinRoom)} />
            <Route path='/' component={appBarHOC(Home)} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
