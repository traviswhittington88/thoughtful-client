import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import EntryPage from '../../routes/EntryPage/EntryPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

export default class App extends Component {
  state = {
    hasError: false
  }
  
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='errorText'>Sorry there was an error! Try again!</p>}
          <Switch>
            <Route
              exact
              path='/'
              component={HomePage}
            />
            <Route
              path='/login'
              component={LoginPage}
            />
            <Route
              path='/signup'
              component={SignupPage}
            />
            <Route
              path='/entry/:entryId'
              component={EntryPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

