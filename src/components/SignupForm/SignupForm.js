import React, { Component } from 'react'

export default class SignupForm extends Component {
  static defaultProps = {
      onSignupSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, pseudonym, user_name, password } = ev.target
    console.log('signup form submitted')
    console.log({ name, pseudonym, user_name, password })

    name.value = ''
    pseudonym.value = ''
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='SignupForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='name'>
          <label htmlFor='SignupForm__name'>
            Name 
          </label>
          <input
            name='name'
            type='text'
            required
            id='SignupForm__name'
          />
        </div>
        <div className='user_name'>
          <label htmlFor='SignupForm__user_name'>
            User name 
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='SignupForm__user_name'
          />
        </div>
        <div className='password'>
          <label htmlFor='SignupForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='SignupForm__password'
          />
        </div>
        <div className='pseudonym'>
          <label htmlFor='SignupForm__pseudonym'>
            Pseudonym 
          </label>
          <input
            name='pseudonym'
            type='text'
            required
            id='SignupForm__pseudonym'
          />
        </div>
        <button type='submit'>
          Sign up
        </button>
      </form>
    )
  }
}