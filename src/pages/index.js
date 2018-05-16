import React from 'react'
import Link from 'gatsby-link'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Carousel,
  Button,
  PageHeader
} from 'react-bootstrap'

const IndexPage = ({ data }) => {
  const { description } = data.site.siteMetadata
  return (
    <Jumbotron style={{
      background: 'black'
    }}>
      <div className="container">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <img src="/images/hawtio_logo.svg" style={{ height: 100, margin: 0 }} />
              <h2 style={{ color: 'lightgrey' }}>{description}</h2>
              <div style={{ marginTop: '4rem', marginBottom: '1rem' }}>
                <Button href="/docs/articles/" style={{ marginRight: '2rem' }}>View Demos</Button>
                <Button bsStyle="primary" href="/docs/get-started/">Get Started Now</Button>
              </div>
            </Col>
            <Col xsHidden smHidden md={6}>
              <Carousel interval={10000} indicators={true} controls={true} style={{ marginLeft: 50 }}>
                <Carousel.Item>
                  <img alt="JMX MBeans" src="/images/screenshots/jmx.png" />
                  <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>JMX MBeans</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="Camel Routes" src="/images/screenshots/jmx.png" />
                  <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>Camel Routes</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="Spring Boot" src="/images/screenshots/jmx.png" />
                  <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>Spring Boot</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </div>
    </Jumbotron>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
