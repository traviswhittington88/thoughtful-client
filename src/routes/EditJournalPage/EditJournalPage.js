import React from 'react'
import './EditJournalPage.css'
import EditJournalForm from '../../components/EditJournalForm/EditJournalForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function EditJournalPage(props) {
    return (
    <>
      <Nav />
      <main role="main">
        <section className="edit-journal-page">
        <header role="banner" className="edit-journal-header">
          <h2 className="edit-journal-heading">Edit journal</h2>
        </header>
          <EditJournalForm history={props.history} />
        </section>
      </main>
      <Footer />
    </>
    )
}