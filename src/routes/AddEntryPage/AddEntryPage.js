import React, { Component } from 'react'
import './AddEntryPage.css'
import AddEntryForm from '../../components/AddEntryForm/AddEntryForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function AddEntryPage(props) {
    return (
    <>
      <Nav />
      <main role="main">
        <section className="add-entry-page">
        <header role="banner" className="add-entry-header">
          <h2 className="add-entry-heading">New Entry</h2>
        </header>
          <AddEntryForm history={props.history} />
        </section>
      </main>
      <Footer />
    </>
    )
}

