import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import JournalSidebarAlt from '../../components/JournalSidebarAlt/JournalSidebarAlt'
import EntryContent from '../../components/EntryContent/EntryContent'
import './EntryContentPage.css'

export default class EntryContentPage extends Component {
  render() {
    return (
      <>
        <Nav />
          <main role="main" className="entryContentPage">
            <div className="alt-container">
              <div className="alt-split alt-left">
                <JournalSidebarAlt />
              </div>
              <div className="alt-split alt-right">
                <EntryContent />
              </div>
            </div>
          </main>
        <Footer />
      </>
    )
  }
}