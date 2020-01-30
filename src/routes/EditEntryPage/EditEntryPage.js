import React from 'react'
import './EditEntryPage.css'
import EditEntryForm from '../../components/EditEntryForm/EditEntryForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function EditEntryPage(props) {
    return (
    <>
      <Nav />
      <main role="main">
        <section className="edit-entry-page">
        <header role="banner" className="edit-entry-header">
          <h2 className="edit-entry-heading">Edit Entry</h2>
        </header>
          <EditEntryForm history={props.history} match={props.match} />
        </section>
      </main>
      <Footer />
    </>
    )
}

