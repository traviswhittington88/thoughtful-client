import React, { Component } from 'react'
import './EntryPage.css'
import EntryListItem from '../EntryItem/EntryItem';

export default class EntryList extends Component {
  render() {
    return (
      <>
        <header className="entry-header">
          <h2 className="entry-main-heading">Entries</h2>
        </header>
        <EntryListItem />
        <button type="button" className="add-entry-button">New Entry</button>
      </>
    )
  }
}