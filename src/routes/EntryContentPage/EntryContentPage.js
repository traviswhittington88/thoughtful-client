import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import JournalSidebarAlt from '../../components/JournalSidebarAlt/JournalSidebarAlt'
import EntryContent from '../../components/EntryContent/EntryContent'
import EntryContext from '../../contexts/EntryContext'
import './EntryContentPage.css'

export default class EntryContentPage extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = EntryContext

  render() {

    const { entryid } = this.props.match.params
    const { dummyEntries, journals } = this.context

    const selectedEntry  = dummyEntries.filter(entry => entry.id === parseInt(entryid))
    const [ journal_id ] = selectedEntry.map(entry => entry.journal_id)
    const journal = journals.filter(journal => journal.id === journal_id)
    const journal_name = journal[0].name


    return (
      <>
        <Nav />
          <main role="main" className="entryContentPage">
            <div className="alt-container">
              <div className="alt-split alt-left">
                <JournalSidebarAlt 
                  journal_name={journal_name} 
                />
              </div>
              <div className="alt-split alt-right">
                {selectedEntry.map(entry =>
                <EntryContent 
                  key={entry.id}
                  {...entry}
                />
                )}
              </div>
            </div>
          </main>
        <Footer />
      </>
    )
  }
}