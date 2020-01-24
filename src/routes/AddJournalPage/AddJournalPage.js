import React from 'react'
import './AddJournalPage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import AddJournalForm from '../../components/AddJournalForm/AddJournalForm'

export default function AddJournalPage(props) {
    return (
    <>
      <Nav />
        <main role="main">
          <section className="add-journal-page">
            <header role="banner">
              <h1 className="ajp-heading">New Journal</h1>
            </header>
            <AddJournalForm history={props.history}/>
          </section>
        </main>
      <Footer />
    </>
    )
}