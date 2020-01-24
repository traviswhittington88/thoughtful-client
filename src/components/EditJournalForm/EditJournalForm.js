import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EntryContext from '../../contexts/EntryContext'
import './EditJournalForm.css' 

export default class EditJournalForm extends Component {
  constructor(props) {
    super(props)
  }
  static contextType = EntryContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { editJournal } = this.context
    const { journal_title } = ev.target
    editJournal(journal_title.value)
    this.props.history.push('/homepage')
  }

  render() {
    return (
      <form
       id="edit_journal"
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