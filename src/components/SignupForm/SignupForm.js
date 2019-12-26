import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { thisTypeAnnotation } from '@babel/types';

export default class SignupForm extends Component {
  static defaultProps = {
      onSignupSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target


    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value,password.value)
    )

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }


  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='SignupForm'
        onSubmit={this.handleSubmitJwtAuth}
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