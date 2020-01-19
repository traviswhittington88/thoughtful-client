import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import JournalSidebar from '../../components/JournalSidebar/JournalSidebar'
import EntryList from '../../components/EntryList/EntryList'


export default class HomePage extends Component {
    render() {
        return (
          <>
            <Nav />
              <main role="main">
                <div className="homepage">
                  <header role="banner" className="homepage-header">
                    <Link to="/homepage"><h1 className="homepage-heading">Your Thoughts</h1></Link>
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
