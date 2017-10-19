import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import reducers from './components/reducers';
import BaseLineContainer from './components/baseline/BaseLineContainer';

import './App.scss';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Router className="diet-global">
        <div className="container-fluid">
          <Provider store={store}>
            <Switch>
              <Route path='/' component={BaseLineContainer} />
            </Switch>
          </Provider>
        </div>
      </Router>
    )
  }
}

export default App
