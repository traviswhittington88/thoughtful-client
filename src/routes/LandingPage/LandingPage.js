import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faPencilAlt, faEdit, faSignInAlt, faUserPlus, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './LandingPage.css'
import logo from './logo.png'

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
                  <p>Add or delete entries from any of your journals</p>
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
                    <h3>About Us</h3>
                    <p>Lorem Ipsum dolor</p>
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