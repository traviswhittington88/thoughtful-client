import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EntryList.css'
import EntryItem from '../EntryItem/EntryItem';
import EntryContext from '../../contexts/EntryContext'
import { getJournalName } from '../../helpers'

export default class EntryList extends Component {

  static contextType = EntryContext

  render() {
    const  { dummyEntries, journals } = this.context

    return (
      <>
        <section className="EntryList">
          <header className="entry-header">
            <h2 className="entry-main-heading">Your Entries</h2>
          </header>
          <ul className="EntryList__list" aria-live="polite">
            {dummyEntries.map(entry => 
              <EntryItem
                key={entry.id}
                {...entry}
                journal_name={getJournalName(entry, journals)}
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
      </>
    )
  }
}