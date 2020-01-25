import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <main role="main">
          <div className="landing-page">
            <header role="banner" className="landing-page-header">
              <h1>Thoughtful...</h1>
              <h2>A safe place for your mind</h2>
            </header>
            <section className="landing-page-section">
              <header>
                <h3>Sign up and login to begin!</h3>
                  <p>1. Enter your name (make it up if you like!)</p>
                  <p>2. Create a username (as long as it's not taken!)</p>
                  <p>3. Give yourself a nickname! Who is your favorite character</p>
                  <p>4. Pick a password! Must be a minimum of 8 characters: at least 1 number, uppercase and special character!</p>
                  <p>5. Next login with your new account and start sharing your thoughts on Thoughtful's shared platform!</p>
              </header>
            </section>
            <section className="landing-page-section">
              <header>
                <h3>Create a journal to begin your journey</h3>
              </header>
              <p>[<em>Placeholder for Journal Icon</em>]</p>
              <p>A thoughtful journal is a way to begin storing those ever existing ideas, dreams, beliefs and feelings into a sacred place of your own</p>
            </section>
            <section className="landing-page-section">
              <header>
                <h3>Add and delete your entries</h3>
              </header>
              <p>[<em>Placeholder for entry icon</em>]</p>
              <p>Add or delete entries from any of your journals</p>
            </section>
            <section className="landing-page-section">
              <header>
                <h3>Read your entries</h3>
              </header>
              <p>[<em>Placeholder for reading icon</em>]</p>
              <p>View your entries from each specific journal or via a whole list of your entries. Sort by date and time as well as category or subject</p>
            </section>
            <section className="member">
              <Link to="/signup"><h3>Become a thoughtful member today</h3></Link>
            </section>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}