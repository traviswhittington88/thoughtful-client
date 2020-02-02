import React, { Component } from 'react'
import EntryContext from '../../contexts/EntryContext'
import './AddJournalForm.css' 

export default class AddJournalForm extends Component {
  static contextType = EntryContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { addJournal } = this.context
    const { journal_title } = ev.target
    addJournal(journal_title.value)
    this.props.history.push('/homepage')
  }

  render() {
    return (
      <form
       id="add_journal"
       onSubmit={this.handleSubmit}
      >
        <div id="form_section">
          <label htmlFor="journal_title" className="journal_title">Journal Title</label>
          <input type="text" name="journal_title" id="journal_title" required />
        </div>
        <button type="submit" id="submit_button">Submit</button>
      </form>
    )
  }
}