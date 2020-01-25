import React, { Component } from 'react'
import EntryContext from '../../contexts/EntryContext'
import config from '../../config'
import TokenService from '../../services/token-service'
import './EditEntryForm.css'


export default class EditEntryForm extends Component {
  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.content = React.createRef()
    this.pen = React.createRef()

    this.state = {
      title: '',
      content: '',
      pseudonym: '',
      error: null,
    }
  }

  static contextType = EntryContext

  handleChangeTitle = ev => {
    this.setState({ title: ev.target.value })
  }

  handleChangeContent = ev => {
    this.setState({ content: ev.target.value })
  }

  handleChangePseudonym = ev => {
    this.setState({ pseudonym: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { title, content, pseudonym } = this.state

    const updatedEntry = {
      title,
      content,
      pseudonym,
    }
    const obj = {
      method: 'PATCH',
      body: JSON.stringify(updatedEntry),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }
    fetch(`${config.API_ENDPOINT}api/entries/${this.props.match.params.entryid}`,obj)
    .then(() => {
      this.context.setEntries()
    })
    this.props.history.push(`/entry/${this.props.match.params.entryid}`)
    }

  componentDidMount() {
    const entryid = this.props.match.params.entryid
    fetch(`${config.API_ENDPOINT}api/entries/${entryid}`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(responseData => {
      this.setState({
        id: responseData.id,
        title: responseData.title,
        content: responseData.content,
        pseudonym: responseData.pseudonym,
      })
    })
    .catch(err => { this.setState({ error: err.message })}) 
  }

  render() {
    const { title, content, pseudonym } = this.state
    return (
      <EntryContext.Consumer>
        {(value) => {
          return (
            <form 
              className="edit-entry-form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-content">
                <label htmlFor="entry-title" className="label entry-title">Entry Title</label>
                <input 
                  type="text" 
                  name="entry-title" 
                  id="entry-title" 
                  ref={this.title}
                  required
                  value={title}
                  onChange={this.handleChangeTitle}
                />
              </div>
              <div className="form-content">
                <label htmlFor="entry-text" className="label entry-text">A place for your thoughts</label>
                <textarea 
                  name="entry-text" 
                  rows="30" 
                  ref={this.content} 
                  value={content}
                  onChange={this.handleChangeContent}
                >
                </textarea>
              </div>
              <div className="form-content">
                <label htmlFor="pen_name" className="pen_name">Edit your Pen Name!</label>
                <input 
                type="text" 
                name="pen_name" 
                id="pen_name" 
                ref={this.pen} 
                required
                value={pseudonym}
                onChange={this.handleChangePseudonym}
                />
              </div>
                <button type="submit" className="edit-entry-button">Submit</button>
            </form>
          )
        }}
      </EntryContext.Consumer>
    )
  }
}