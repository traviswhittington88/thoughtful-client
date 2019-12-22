import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
            {error && <p className='error'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            type='text'
            name='user_name'
            id='LoginForm__user_name'
            required
          />
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password 
          </label>
          <input 
            type='password'
            name='password'
            id='LoginForm__password'
            required
          />
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }



}