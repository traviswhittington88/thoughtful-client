import React, { Component } from 'react'
import './AddEntryPage.css'
import AddEntryForm from '../../components/AddEntryForm/AddEntryForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class AddEntryPage extends Component {
  render() {
    return (
    <>
      <Nav />
      <main role="main">
        <section className="add-entry-page">
        <header role="banner" className="add-entry-header">
          <h1 className="add-entry-heading">New Entry</h1>
        </header>
          <AddEntryForm />
        </section>
      </main>
      <Footer />
    </>
    )
  }
}
