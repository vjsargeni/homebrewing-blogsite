// type HeaderProps = {
//   brew: string
// }
//Not used
import { Container } from 'react-bootstrap'

const Header = function () {
  //const { brew } = props

  return (
    <Container className="bg-dark" fluid>
      <h1 className="text-center text-light">Welcome to the WIP bincoBrew site</h1>
    </Container>
  )
}

export default Header
