import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './EntryContentPage.css'

export default class EntryContentPage extends Component {
  render() {
    return (
      <>
        <Nav />
          <main role="main" className="entryContentPage">

          </main>
        <Footer />
      </>
    )
  }
}