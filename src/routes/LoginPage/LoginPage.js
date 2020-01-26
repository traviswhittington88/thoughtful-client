import React, { Component } from 'react'
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    /*console.log(this.props.location)
    const { destination } = (location.state || {}).from || '/' 
    history.push(destination) */
    history.push('/homepage')
  }

    render() {
      return (
        <>
          <Nav />
          <main role="main">
            <section className='login-page'>
              <header role="banner" className="header">
                <h2>Login</h2>
              </header>
              <div className="login-content">
              <LoginForm onLoginSuccess={this.handleLoginSuccess} />
              </div>
            </section>
          </main>
          <Footer />
        </>
      )
    }
}