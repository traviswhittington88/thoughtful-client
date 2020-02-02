import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faPencilAlt, faEdit, faSignInAlt, faUserPlus, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './LandingPage.css'
import logo from '../../images/logo_white.png'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <main role="main">
          <div className="landing-page">
            <header role="banner" className="showcase">
              <div className="content">
                <img src={logo} className="logo" alt="Thoughtful Inc" />
                <div className="title">
                  Welcome To Thoughtful 
                </div>
                <div className="text">
                  An anonymous place to share your thoughts
                </div>
                <div className="info-container">
                <p>Use these credentials to login!</p>
                <p>Username - defaultUser </p>
                <p>Password - AAaa$$11</p>
              </div>
              </div>
            </header>
            <section className="services">
              <div className="Container grid-3 center">
                <div>
                  <FontAwesomeIcon icon={faPencilAlt} size="3x" />
                  <h3>Create A Journal</h3>
                  <p>A thoughtful journal is a way to begin storing your powerful ideas and sharing them with our community</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEdit} size="3x" />
                  <h3>Add Edit and Delete Your Entries</h3>
                  <p>Have a thought, change that thought or delete it forever</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faGlasses} size="3x" />
                  <h3>Read Your Entries</h3>
                  <p>View entries from a specific journal or as a complete list.</p>
                </div>
              </div>
            </section>
            <section className="about bg-light">
              <div className="Container">
                <div className="grid-2">
                  <div className="center">
                    <FontAwesomeIcon icon={faLaptopCode} size="10x" />
                  </div>
                  <div>
                    <h3>About Us And You</h3>
                    <p>Thoughtful INC. is an organization that serves the collective needs of the user. Our mission is to 
                      design journaling applications that emphasize anonymity, plurality and freedom of expression. We 
                      at Thoughtful believe that profile-driven sites can often hinder honest human interaction and therefore
                      we see fit to provide an alternative creative outlet for our community. Enjoy!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}