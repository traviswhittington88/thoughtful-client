import React, { Component } from 'react'
import EntryContext from '../../contexts/EntryContext'
import './AddEntryForm.css'


export default class AddEntryForm extends Component {
  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.content = React.createRef()
    this.pen = React.createRef()
    this.journal = React.createRef()
  }

  static contextType = EntryContext

  getJournalOptions = journals => {
    const journalOptions = journals.map(journal => (
        <option 
          key={journal.id} 
          className="option"
        >
          {journal.name}
        </option>
    ))

    return journalOptions
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const title = this.title.current.value
    const journal = this.journal.current.value
    const content = this.content.current.value
    const pen = this.pen.current.value
    console.log(pen)
    this.context.addEntry(title, journal, content, pen)
    this.props.history.push('/homepage')
  }

  render() {
    return (
      <EntryContext.Consumer>
        {(value) => {
          return (
            <form 
              className="add-entry-form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-content">
                <label htmlFor="entry-title" className="label entry-title">Entry Title</label>
                <input type="text" name="entry-title" id="entry-title" ref={this.title} required />
              </div>
              <div className="form-content">
                <label htmlFor="entry-text" className="label entry-text">A place for your thoughts</label>
                <textarea name="entry-text" rows="30" ref={this.content}></textarea>
              </div>
              <div className="form-content">
                <label htmlFor="pen_name" className="pen_name">Add A Pen Name! (optional)</label>
                <input type="text" name="pen_name" id="pen_name" ref={this.pen} required />
              </div>
              <div className="form-content">
                <label htmlFor="journal-select" className="label journal-select">Select Journal</label>
                  <select ref={this.journal}>{this.getJournalOptions(value.dummyJournals)}</select>
              </div>
                <button type="submit" className="add-entry-button">Submit</button>
            </form>
          )
        }}
      </EntryContext.Consumer>
    )
  }
}