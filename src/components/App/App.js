import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import EntryContentPage from '../../routes/EntryContentPage/EntryContentPage'
import AddEntryPage from '../../routes/AddEntryPage/AddEntryPage'
import AddJournalPage from '../../routes/AddJournalPage/AddJournalPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

export default class App extends Component {
  state = {
    entries : [
      { 
        "id": 1,
        "title": "entry #1",
        "content": "What a day. I can't say I was surprised at the chaos which ensued upon our normally pleasant little lives..",
        "journal_id": 4
      },
      {
        "id": 2,
        "title": "entry #2",
        "content": "This is entry number two. Yoo. Hoo.",
        "journal_id": 2
      },
      {
        "id": 3,
        "title": "entry #3",
        "content": "this is entry number three.. Woop. Dee.",
        "journal_id": 1
      },
    ],
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
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='errorText'>Sorry there was an error! Try again!</p>}
          <Switch>
            <Route
              exact
              path='/'
              component={LandingPage}
            />
            <Route
              exact
              path='/homepage'
              //component={HomePage}
              render={(props) => <HomePage {...props} entries={this.state.entries} />}
              
            />
            <Route
              path='/signup'
              component={SignupPage}
            />
            <Route
              path='/login'
              component={LoginPage}
            />
            <Route
              path="/entry/:entryId"
              component={EntryContentPage}
            />
            <Route
              path="/journal/addJournalPage"
              component={AddJournalPage}
            />
            <Route
              path="/entry/addEntryPage"
              component={AddEntryPage}
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

