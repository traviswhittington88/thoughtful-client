import React, { Component } from 'react'
import './HomePage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import JournalSidebar from '../../components/JournalSidebar/JournalSidebar'
import EntryPage from '../../components/EntryPage/EntryPage'


export default class HomePage extends Component {
    constructor(props) {
      super(props)
     console.log(this.props)
    }
    render() {
        return (
          <>
            <Nav />
              <main role="main">
                <div className="homepage">
                  <header role="banner" className="homepage-header">
                    <h1 className="homepage-heading">Your Thoughts</h1>
                  </header>
                  <div className="container">
                    <div className="split left">
                      <JournalSidebar />
                    </div>
                    <div className="split right">
                      <EntryPage />
                    </div>
                  </div>
                </div>   
              </main>
            <Footer />
          </>
        )
    }
}
