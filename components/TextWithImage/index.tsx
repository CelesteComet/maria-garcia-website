import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import styles from './index.module.scss'

export interface TextWithImageProps {
  title?: string
  text: string
  image: string
  alt: string
}

export default function TextWithImage({
  title,
  text,
  image,
  alt,
}: TextWithImageProps): JSX.Element {
  return (
    <Container
      className={
        styles.textWithImage
      }
    >
      <Row>
        <Col
          xs={12}
          md={6}
        >
          {title && (
            <h2>
              {title}
            </h2>
          )}
          <p>{text}</p>
        </Col>
        <Col
          xs={12}
          md={6}
        >
          <Image
            src={image}
            alt="Alice Wu"
          />
        </Col>
      </Row>
    </Container>
  )
}
