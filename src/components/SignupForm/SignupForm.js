import React, { Component } from 'react'
import './SignupForm.css'
import AuthApiService from '../../services/auth-api-service'


export default class SignupForm extends Component {
  static defaultProps = {
      onSignupSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, pseudonym, user_name, password } = ev.target
    const newUser = { full_name, pseudonym, user_name, password }

    this.setState({ error: null })

    AuthApiService.postUser(newUser)
      .then(user => {
        full_name.value = ''
        pseudonym.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onSignupSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }



  render() {
    const { error } = this.state
    return (
      <form
        className='signup-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='full_name'>*Full name</label>
          <input
            name='full_name'
            type='text'
            required
            id='full_name'
          />
        </div>
        <div className='user_name'>
          <label htmlFor='user_name'>*User name</label>
          <input
            name='user_name'
            type='text'
            required
            id='user_name'
          />
        </div>
        <div className='password'>
          <label htmlFor='password'>*Password</label>
          <input
            name='password'
            type='password'
            required
            id='password'
          />
        </div>
        <div className='pseudonym'>
          <label htmlFor='pseudonym'>Pseudonym</label>
          <input
            name='pseudonym'
            type='text'
            id='pseudonym'
          />
        </div>
        <button type='submit' id="submit">Sign up</button>
      </form>
    )
  }
}