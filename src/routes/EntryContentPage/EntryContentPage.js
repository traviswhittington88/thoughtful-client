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
    const { dummyEntries, dummyJournals } = this.context
    const selectedEntry  = dummyEntries.filter(entry => entry.id.toString() === entryid.toString())
    const journalIdOfEntry= selectedEntry.map(entry => entry.journal_id)
    const journal_id = journalIdOfEntry[0]
    const journalName = dummyJournals.filter(journal => journal.id === journal_id).map(journal => journal.name)
    const journal_name = journalName[0]
   
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
                  history={this.props.history}
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