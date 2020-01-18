import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import EntryContext from '../../contexts/EntryContext'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import EntryContentPage from '../../routes/EntryContentPage/EntryContentPage'
import AddEntryPage from '../../routes/AddEntryPage/AddEntryPage'
import AddJournalPage from '../../routes/AddJournalPage/AddJournalPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

const entries = [
  { 
    "id": 1,
    "title": "entry #1",
    "content": "What a day. I can't say I was surprised at the chaos which ensued upon our normally pleasant little lives..",
    "journal_id": 4,
    "pseudonym": "Roland Deschaine", 
  },
  {
    "id": 2,
    "title": "entry #2",
    "content": "This is entry number two. Yoo. Hoo.",
    "journal_id": 2,
    "pseudonym": "Bugs Bunny", 
  },
  {
    "id": 3,
    "title": "entry #3",
    "content": "this is entry number three.. Woop. Dee.",
    "journal_id": 1,
    "pseudonym": "Yosemite Sam",
  },
]

const journals = [
  {
    "id": 1,
    "name": "Daily Life"
  },
  {
    "id": 2,
    "name": "Music"
  },
  {
    "id": 3,
    "name": "Work Life"
  },
  {
    "id": 4,
    "name": "Future thoughts"
  },
  {
    "id": 5,
    "name": "Memories"
  },
  {
    "id": 6,
    "name": "My family"
  },
  {
    "id": 7,
    "name": "Funny Thoughts"
  }
]


export default class App extends Component {
  state = {
    entries,
    dummyEntries: entries,
    journals,
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  setEntries = entries => {

  }

  addEntry = entries => {

  }

  deleteEntry = entryId => {
    const filteredEntries = this.state.dummyEntries.filter(entry => entry.id !== entryId)
    this.setState({ dummyEntries: filteredEntries })
  }

  filterEntriesByJournal = journalId => {
    const newEntries = this.state.entries
    const filteredEntries = newEntries.filter(entry => entry.journal_id === journalId)
    this.setState({ dummyEntries: filteredEntries })
  }

  componentDidMount() {
    this.setState({ entries, journals })
  }


  render() {
    const contextValue = {
      dummyEntries: this.state.dummyEntries,
      journals: this.state.journals,
      addEntry: this.addEntry,
      deleteEntry: this.deleteEntry,
      filterEntriesByJournal: this.filterEntriesByJournal,
    }
    return (
      <div className='App'>
        <header className='App__header'>
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='errorText'>Sorry there was an error! Try again!</p>}
          <EntryContext.Provider value={contextValue}>
          <Switch>
            <Route
              exact
              path='/'
              component={LandingPage}
            />
            <Route
              exact
              path='/homepage'
              component={HomePage}
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
              path="/entry/:entryid"
              component={EntryContentPage}
            />
            <Route
              path="/addentry"
              component={AddEntryPage}
            />
            <Route
              path="/addjournal"
              component={AddJournalPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
          </EntryContext.Provider>
        </main>
      </div>
    );
  }
}

