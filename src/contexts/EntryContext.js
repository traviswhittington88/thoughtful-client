import React, { Component } from 'react'

export const nullJournal = {
  id: null,
  name: '',
}

const EntryListContext = React.createContext({
  entries: [],
  dummyEntries: [],
  journals: [],
  dummyJournals: [],
  journal: nullJournal,
  addEntry: () => {},
  deleteEntry: () => {},
  setEntries: () => {},
  addJournal: () => {},
  filterEntriesByJournal: () => {},
})

export default EntryListContext


/*export const nullEntry = {
  author: {},
  tags: [],
}

const EntryContext = React.createContext({
  entry: nullEntry,
  error: null,
  setError: () => {},
  clearError: () => {},
  setEntry: () => {},
  clearEntry: () => {},
})

export default EntryContext

export class EntryProvider extends Component {
  state = {
    entry: nullEntry,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = error => {
    this.setState({ error: null })
  }

  setEntry = entry => {
    this.setState({ entry })
  }

  clearEntry = entry => {
    this.setState({ entry: nullEntry })
  }

  render() {
    const value = {
      entry: this.state.entry,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEntry: this.setEntry,
      clearEntry: this.clearEntry,
    }
    return (
      <EntryContext.Provider value={value}>
        {this.props.children}
      </EntryContext.Provider>
    )
  }
}

*/