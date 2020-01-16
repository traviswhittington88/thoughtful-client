import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EntryList.css'
import EntryItem from '../EntryItem/EntryItem';
import EntryContext from '../../contexts/EntryContext'

export default class EntryList extends Component {

  static contextType = EntryContext

  render() {
    const  { entries } = this.context
    return (
      <>
        <section className="EntryList">
          <header className="entry-header">
            <h2 className="entry-main-heading">Your Entries</h2>
          </header>
          <ul className="EntryList__list" aria-live="polite">
            {entries.map(entry => 
              <EntryItem
                key={entry.id}
                {...entry}
              />
            )}
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