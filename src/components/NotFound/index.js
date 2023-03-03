import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found.
    </NotFoundPara>
  </NotFoundContainer>
)

export default NotFound
