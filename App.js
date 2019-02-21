import React, { Component } from 'react';
import AppoloClient from 'apollo-boost';
import { AppoloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';

const client = new AppoloClient({
    uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <AppoloProvider client={client}>
          <Router>
              <div className="container">
                  <Route exact path="/" component={Launches} />
                  <Route exact path="/launch/:flight_number" component={Launch} />
              </div>
          </Router>
      </AppoloProvider>
    );
  }
}

export default App;
