// type HeaderProps = {
//   brew: string
// }

import { Container } from 'react-bootstrap'

const Header = function () {
  //const { brew } = props

  return (
    <Container fluid>
      <h1 className="text-center"> Welcome to the WIP bincoBrew site</h1>
    </Container>
  )
}

export default Header
