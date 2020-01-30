import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './EntryList.css'
import EntryItem from '../EntryItem/EntryItem';
import EntryContext from '../../contexts/EntryContext'
import { getJournalName } from '../../helpers'

export default class EntryList extends Component {

  static contextType = EntryContext

  getJournalName(entry, journals) {
    const journal_id = entry.journal_id
    const journal = journals.filter(journal => journal.id === journal_id)
    const journal_name = journal[0].name 
    return journal_name
  }
  
  render() {
    const  { dummyEntries, dummyJournals } = this.context
    console.log(dummyEntries)
    return (
      <>
      <BrowserRouter>
        <section className="EntryList">
          <header className="entry-header">
            <h2 className="entry-main-heading">Your Entries</h2>
          </header>
          <ul className="EntryList__list" aria-live="polite">
            {dummyEntries.map(entry => 
              <EntryItem
                key={entry.id}
                {...entry}
                journal_name={this.getJournalName(entry, dummyJournals)}
              />
              )
            }
            <button type="button" className="add-entry-button">
              <Link
                to="/addentry"
              >
                New Entry
              </Link>
            </button>
          </ul>
        </section>
        </BrowserRouter>
      </>
    )
  }
}