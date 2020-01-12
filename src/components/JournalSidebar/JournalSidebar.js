import React, { Component } from 'react'
import './JournalSidebar.css'

export default class JournalSidebar extends Component {
  render() {
    return (
      <>
        <header className="journalbar-header">
          <h2 className="journal-heading">Journals</h2>
        </header>
        <div className="journal">
            <h3>Daily Life</h3>
            </div>
            <div className="journal">
              <h3>Music</h3>
            </div>
            <div className="journal">
              <h3>Work Life</h3>
            </div>
            <div className="journal">
              <h3>Future thoughts</h3>
            </div>
            <div className="journal">
              <h3>Memories</h3>
            </div>
            <div className="journal">
              <h3>My family</h3>
            </div>
             <div className="journal">
              <h3>Funny Thoughts</h3>
            </div>
            <button type="button" className="add-journal-button">New Journal</button>
      </>
    )
  }
}