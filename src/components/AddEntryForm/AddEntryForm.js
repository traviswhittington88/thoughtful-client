import React, { Component } from 'react'
import './AddEntryForm.css'

export default class AddEntryForm extends Component {
  render() {
    return (
      <form className="add-entry-form">
        <div className="form-content">
          <label htmlFor="entry-title" className="label entry-title">Entry Title</label>
          <input type="text" name="entry-title" id="entry-title" required />
        </div>
        <div className="form-content">
          <label htmlFor="entry-text" className="label entry-text">A place for your thoughts</label>
          <textarea name="entry-text" rows="30"></textarea>
        </div>
        <div className="form-content">
          <label htmlFor="journal-select" className="label journal-select">Select Journal</label>
            <select>No Journals</select>
        </div>
          <button type="submit" className="add-entry-button">Submit</button>
      </form>
    )
  }
}