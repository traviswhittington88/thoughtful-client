import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import './App.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import EntryContext from '../../contexts/EntryContext'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import EntryContentPage from '../../routes/EntryContentPage/EntryContentPage'
import AddEntryPage from '../../routes/AddEntryPage/AddEntryPage'
import EditEntryPage from '../../routes/EditEntryPage/EditEntryPage'
import EditJournalPage from '../../routes/EditJournalPage/EditJournalPage'
import AddJournalPage from '../../routes/AddJournalPage/AddJournalPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

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
    fetch(`${config.API_ENDPOINT}api/entries`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(entries => {
      this.setState({ dummyEntries: entries, entries: entries })
    })
    .catch(err => { this.setState({ error: err.message })})
  }

  setJournals = () => {
    fetch(`${config.API_ENDPOINT}api/journals`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(journals => {
      this.setState({ dummyJournals: journals, journals: journals })
    })
    .catch(err => { this.setState({ error: err.message })})
  }

  addEntry = (title, journal_name, content, pseudonym) => {
    const [journal_id] = this.state.dummyJournals.filter(journal => journal.name === journal_name).map(journal => { return journal.id })
    const newEntry = {
      title,
      content,
      pseudonym,
      journal_id,
    }

    const obj = {
      method: 'POST',
      body: JSON.stringify(newEntry),
      headers: {
        'Content-Type': 'application/json'
      }
    } 
    fetch(`${config.API_ENDPOINT}api/entries`,obj)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json();
     
    })
    .then(entry => {  
      const tempEntries = this.state.dummyEntries
      tempEntries.push(entry)
      this.setState({ dummyEntries: tempEntries, entries: tempEntries })
    })
    .catch(error => this.setState({ error:error.message })) 
  }

  editEntry = (id, title, content, pseudonym) => {
    const updatedEntry = {
      title,
      content,
      pseudonym
    }

    const obj = {
      method: 'PATCH',
      body: JSON.stringify(updatedEntry),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }

    fetch(`${config.API_ENDPOINT}api/entries/${id}`,obj)
      .then(updatedEntry => console.log(updatedEntry))

  }

  deleteEntry = entryId => {
    fetch(`${config.API_ENDPOINT}api/entries/${entryId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const tempEntries = this.state.entries.filter(entry => entry.id !== entryId)
    this.setState({ dummyEntries: tempEntries, entries: tempEntries })
  }

  addJournal = (journal_name) => {
    const obj = {
      method: 'POST',
      body: JSON.stringify({name: journal_name}),
      headers: {
        'Content-Type': 'application/json',
      }
    }

     
    fetch(`${config.API_ENDPOINT}api/journals`,obj)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json();
    })
    .then(journal => {
      const tempJournals = this.state.journals
      tempJournals.push(journal);
      this.setState({ dummyJournals: tempJournals, journals: tempJournals })
    })
    .catch(error => this.setState({ error: error.message }))
    console.log(this.state.dummyJournals)
  }

  filterEntriesByJournal = journal_id => {
    fetch(`${config.API_ENDPOINT}api/entries/journal/${journal_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(entries => {
      this.setState({ dummyEntries: entries, entries: entries })
    })
    .catch(err => {this.setState({ error: err.message })})
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}api/journals`)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(journals => this.setState({ dummyJournals: journals, journals: journals }))
      .catch(err => {this.setState({ error: err.message })})

    fetch(`${config.API_ENDPOINT}api/entries`)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(entries => {
        this.setState({ entries: entries, dummyEntries: entries })
      })
      .catch(err => {this.setState({ error: err.message })})
  }


  render() {
    const contextValue = {
      dummyEntries: this.state.dummyEntries,
      dummyJournals: this.state.dummyJournals,
      selectedEntry: this.state.selectedEntry,
      addEntry: this.addEntry,
      editEntry: this.editEntry,
      deleteEntry: this.deleteEntry,
      setEntries: this.setEntries,
      setSelectedEntry: this.setSelectedEntry,
      addJournal: this.addJournal,
      filterEntriesByJournal: this.filterEntriesByJournal,
    }

    return (
      <div className='App'>
        <header className='App__header'></header>
        <main className='App__main'>
          {this.state.hasError && <p className='errorText'>Sorry there was an error! Try again!</p>}
          <EntryContext.Provider value={contextValue}>
          <Switch>
            <Route
              exact
              path='/'
              component={LandingPage}
            />
            <PrivateRoute
              exact
              path='/homepage'
              component={HomePage}
            />
            <PublicOnlyRoute
              path='/signup'
              component={SignupPage}
            />
            <PublicOnlyRoute
              path='/login'
              component={LoginPage}
            />
            <PrivateRoute
              path="/entry/:entryid"
              component={EntryContentPage}
            />
            <PrivateRoute
              path="/addentry"
              component={AddEntryPage}
            />
            <PrivateRoute
              path="/editentry/:entryid"
              component={EditEntryPage}
            />
            <PrivateRoute
              path="/addjournal"
              component={AddJournalPage}
            />
            <PrivateRoute
              path="/editjournal/:journalid"
              component={EditJournalPage}
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

