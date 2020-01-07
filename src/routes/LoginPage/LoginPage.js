import React, { Component } from 'react'
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
    const { destination } = (location.state || {}).from || '/'
    history.push(destination)
  }

    render() {
      return (
        <>
          <Nav />
          <section className='LoginPage'>
            <h2>Login!</h2>
            <LoginForm
              onLoginSuccess={this.handleLoginSuccess}
            />
          </section>
          <Footer />
        </>
      )
    }
}