import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './index.module.scss'

export interface HeroButton {
  text: string
  link: string
}

export interface HeroProps {
  backgroundImage: string
  button: HeroButton
}

import Button from 'react-bootstrap/Button'
export default function Hero({
  backgroundImage,
  button,
}: HeroProps): JSX.Element {
  return (
    <>
      <Container
        className={
          styles.hero
        }
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Row>
          <Col>
            <div className="hero-button-container">
              <Button
                href={
                  button.link
                }
                variant="outline-light"
              >
                {
                  button.text
                }
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        className={
          styles.underHero
        }
      >
        <Row>
          <div className="content">
            <Col>
              <Row>
                <Col
                  sm={6}
                >
                  <h1>
                    Alice
                    Wu
                  </h1>
                  <p>
                    California
                    Bay
                    Area
                    Realtor
                  </p>
                </Col>
                <Col
                  sm={6}
                >
                  <img
                    src="/compass.png"
                    alt="compass"
                  />
                  <h3>
                    Mony
                    Nop
                    Team
                  </h3>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  )
}
