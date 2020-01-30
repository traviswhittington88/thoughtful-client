import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import EntryContext from '../../contexts/EntryContext'
import './HomePage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import JournalSidebar from '../../components/JournalSidebar/JournalSidebar'
import EntryList from '../../components/EntryList/EntryList'


export default class HomePage extends Component {
  static contextType = EntryContext
    render() {
        return (
          <>
            <Nav />
              <main role="main">
                <div className="homepage">
                  <header role="banner" className="homepage-header">
                    <Link 
                      to="/homepage"
                      onClick={this.context.setEntries}
                    >
                      <h1 className="homepage-heading">Your Thoughts</h1>
                    </Link>
                  </header>
                  <div className="container">
                    <div className="split left">
                      <JournalSidebar />
                    </div>
                    <div className="split right">
                      <EntryList />
                    </div>
                  </div>
                </div>   
              </main>
            <Footer />
          </>
        )
    }
}
