import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
  display: flex;
  flex-direction: column;
`

export const Navbar = styled.nav`
  width: 100vw;
  padding: 2%;
  padding-right: 4%;
  padding-left: 4%;
`

export const NavLogo = styled.img`
  width: 180px;
`
export const LogoutButton = styled.button`
  outline: none;
  border: 1px solid #ffffff;
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
`
export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeHeading = styled.h1`
  font-size: 28px;
  color: #ffffff;
  text-align: center;
`

export const HomeCard = styled.img`
  width: 50%;
`
