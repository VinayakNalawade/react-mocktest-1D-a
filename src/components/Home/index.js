import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  MainContainer,
  Navbar,
  NavLogo,
  LogoutButton,
  HomeContainer,
  HomeHeading,
  HomeCard,
} from './styledComponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/ebank/login')
  }

  return (
    <MainContainer>
      <Navbar>
        <NavLogo
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <LogoutButton type="button" onClick={logout}>
          Logout
        </LogoutButton>
      </Navbar>
      <HomeContainer>
        <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
        <HomeCard
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </HomeContainer>
    </MainContainer>
  )
}

export default Home
