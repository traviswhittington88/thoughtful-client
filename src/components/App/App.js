import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { create_UUID } from '../../helpers'
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
    "title": "Ah...what's up doc?",
    "content": `Wow what a day! I managed to escape that dopey hunter Fudd, Yosemite GoofHead, and some other notoriously dumb antagonists! not to mention.. I got to eat several delicious carrots.`,
    "journal_id": 4,
    "pseudonym": "Bugs Bunny", 
  },
  {
    "id": 2,
    "title": "Today was a bad day",
    "content": `Well where to begin? I blew myself up wit my own musket chasing dat twicky cawot eat'n, no good scwewy wabbit... guess I'll twy again next week`,
    "journal_id": 2,
    "pseudonym": "Elmer Fudd", 
  },
  {
    "id": 3,
    "title": `Toot'n Hoot'n and Son of a Shoot'n`,
    "content": `I'm the meanest, roughest, toughest hombre that's ever crossed the Rio Grande - and I ain't o namby-bamby!" "I'm the hootin'est, tootin'est, shootin'est, bob-tail wildcat, in the west!" "I'm the fastest gun north, south, east, aaaaaaaand west of the Pecos!" "When I say whoa, I mean whoa!"`,
    "journal_id": 1,
    "pseudonym": "Yosemite Sam",
  },
]

const journals = [
  {
    "id": 1,
    "name": "Sam Says"
  },
  {
    "id": 2,
    "name": "Elmer's Woes"
  },
  {
    "id": 3,
    "name": "Worklife"
  },
  {
    "id": 4,
    "name": "A Bugs Life"
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
  constructor(props) {
    super(props)

    this.state = {
      entries: [],
      dummyEntries: [],
      journals: [],
      dummyJournals: [],
      hasError: false
    }
  }
 

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  setEntries = () => {
    this.setState({ dummyEntries: entries })
  }

  setJournals = journals => {

  }

  addEntry = (title, journal_name, content, pseudonym) => {
    const tempEntries = this.state.dummyEntries
    const [journal_id] = this.state.dummyJournals.filter(journal => journal.name === journal_name).map(journal => { return journal.id })
    const newEntry = {
      id: create_UUID(),
      title,
      content,
      journal_id,
      pseudonym,
    }
    tempEntries.push(newEntry)
    this.setState({ dummyEntries: tempEntries, entries: tempEntries })
  }

  deleteEntry = entryId => {
    const tempEntries = this.state.entries.filter(entry => entry.id !== entryId)
    this.setState({ dummyEntries: tempEntries, entries: tempEntries })
  }

  addJournal = (journal) => {
    const tempJournals = this.state.journals
    tempJournals.push({id: create_UUID(), name: journal })
    this.setState({ dummyJournals: tempJournals })
  }

  filterEntriesByJournal = journalId => {
    const tempEntries = this.state.entries.filter(entry => entry.journal_id === journalId)
    this.setState({ dummyEntries: tempEntries })
  }

  componentWillUnmount() {

  }

  componentDidMount() {

    this.setState(
      { 
        entries: entries,
        dummyEntries: entries,
        journals: journals,
        dummyJournals: journals,
      }
    )
  }


  render() {
    const contextValue = {
      dummyEntries: this.state.dummyEntries,
      dummyJournals: this.state.dummyJournals,
      addEntry: this.addEntry,
      deleteEntry: this.deleteEntry,
      setEntries: this.setEntries,
      addJournal: this.addJournal,
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
              render={( { history }) =>
                <React.Fragment>
                  <AddEntryPage history={ history } />
                </React.Fragment> 
              }
            />
            <Route
              path="/addjournal"
              render={({ history }) =>
                <React.Fragment>
                  <AddJournalPage history={ history } />
                </React.Fragment>
              }
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

