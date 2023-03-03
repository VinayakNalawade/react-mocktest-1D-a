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
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 120px;
`
export const LogoutButton = styled.button`
  outline: none;
  border: 1px solid #ffffff;
  padding: 9px;
  color: #ffffff;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: transparent;
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
