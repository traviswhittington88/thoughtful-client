import config from '../config'

AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials), 
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(error => Promise.reject(error))
          : res.json()
        )
  },
}

export default AuthApiService