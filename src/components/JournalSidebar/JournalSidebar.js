import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import JournalContext from '../../contexts/JournalContext'
import EntryContext from '../../contexts/EntryContext'
import JournalItem from '../JournalItem/JournalItem'
import './JournalSidebar.css'


export default class JournalSidebar extends Component {

  static contextType = EntryContext

  render() {
    const { journals } = this.context
    return (
      <>
        <header className="journalbar-header">
          <h2 className="journal-heading">Journals</h2>
        </header>
        <ul className="JournalSidebar__list" aria-live="polite">
          {journals.map(journal =>
          <JournalItem
            key={journal.id}
            {...journal}
          />
          )}
        </ul>
        <button type="button" className="add-journal-button">
          <Link
            to="/addjournal"
          >
            New Journal
          </Link>
        </button>
      </>
    )
  }
}