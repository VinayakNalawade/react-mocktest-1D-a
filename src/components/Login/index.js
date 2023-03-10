import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginPage,
  LoginContainer,
  LoginImg,
  LoginForm,
  LoginHeading,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', error: ''}

  changeUserId = event => this.setState({userId: event.target.value})

  changePin = event => this.setState({pin: event.target.value})

  onSubmit = async event => {
    event.preventDefault()

    const {userId, pin} = this.state

    const userDetails = {user_id: userId, pin}

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/ebank/login', option)

    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 2})

      const {history} = this.props

      history.replace('/')
    } else {
      this.setState({error: data.error_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {userId, pin, error} = this.state

    return (
      <LoginPage>
        <LoginContainer>
          <LoginImg
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          />
          <LoginForm onSubmit={this.onSubmit}>
            <LoginHeading>Welcome Back!</LoginHeading>
            <LoginLabel htmlFor="userId">User ID</LoginLabel>
            <LoginInput
              type="input"
              id="userId"
              placeholder="Enter User ID"
              onChange={this.changeUserId}
              value={userId}
            />
            <LoginLabel htmlFor="pin">PIN</LoginLabel>
            <LoginInput
              type="password"
              id="pin"
              placeholder="Enter PIN"
              onChange={this.changePin}
              value={pin}
            />
            <LoginButton type="submit">Login</LoginButton>
            {error !== '' && <LoginError>{error}</LoginError>}
          </LoginForm>
        </LoginContainer>
      </LoginPage>
    )
  }
}

export default Login
