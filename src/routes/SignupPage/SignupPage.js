import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm';


export default class SignupPage extends Component {
    static defaultProps = {
      history: {
        push: () => {},
      },
    }

    handleSignupSuccess = user => {
      const { history } = this.props
      history.push('/login')
    }
    render() {
      return (
        <section className='SignupPage'>
          <h2>Sign up!</h2>
          <SignupForm
            onSignupSuccess={this.handleSignupSuccess}
          />
        </section>
        )
    }
}