import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./Nav";
import CardContainer from "./cardContainer";
import Map from "./Map";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CardContainer} />
            <Route path="/map" component={Map} />
            <Route path="*" render={() => <div>test</div>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }

}

export default App;
