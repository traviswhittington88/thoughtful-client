import React, { Component } from 'react'
import './AddJournalForm.css' 

export default class AddJournalForm extends Component {
  render() {
    return (
      <form id="add-journal">
        <div id="form-section">
          <label htmlFor="journal-title" className="journal-title">Journal Title</label>
          <input type="text" name="journal-title" id="journal-title" required />
        </div>
        <button type="submit" id="submit-button">submit</button>
      </form>
    )
  }
}