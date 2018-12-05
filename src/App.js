import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/routes/Main";
import Livingroom from "./components/routes/Livingroom";
import Kitchen from "./components/routes/Kitchen";
import Bathroom from "./components/routes/Bathroom";
import Error from "./components/error/Error";
import './App.css';

class App extends Component {

  render() {
    return (
     
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/livingRoom" component={Livingroom} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/bathroom" component={Bathroom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
