import React, { Component } from 'react'
import './AddEntryPage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class AddEntryPage extends Component {
  render() {
    return (
    <>
      <Nav />
      <main role="main">
        <header role="banner" className="add-entry-header">
          <h1 className="add-entry-heading">New Entry</h1>
        </header>
        <section className="form-section">
          <form id="add-entry-form">
            <div className="form-content">
              <label htmlFor="entry-title" className="entry-title">Entry Title</label>
              <input type="text" name="entry-title" id="entry-title" required />
            </div>
            <div className="form-content">
              <label htmlFor="entry-text">A place for your thoughts</label>
              <textarea name="entry-text" rows="30"></textarea>
            </div>
            <div className="form-content">
              <label htmlFor="journal-selector">Select Journal</label>
                <select>No Journals</select>
            </div>
            <button type="submit" className="add-entry-button">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
    )
  }
}
