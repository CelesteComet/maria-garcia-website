import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './index.module.scss'

export default function Navigation(): JSX.Element {
  const headerItems = [
    'communities',
    'concierge',
    'buy',
    'sell',
    'market update',
    'contact',
  ]
  return (
    <>
      <Navbar
        className={
          styles.navBar
        }
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              width="150"
              height="150"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav>
            {headerItems.map(
              (
                headerItem
              ) => {
                return (
                  <Nav.Link
                    href={`/${headerItem}`}
                  >
                    {
                      headerItem
                    }
                  </Nav.Link>
                )
              }
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
