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
    <div>
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
                <Carousel interval={10000} indicators={false} controls={false} style={{ marginLeft: 50 }}>
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
      <div className="container">
        <Grid>
          <Row>
            <Col md={6} style={{ padding: '3rem' }}>
              <h3>Modular by nature</h3>
              <p>
                Hawtio has lots of plugins such as: a git-based Dashboard and Wiki, logs, health,
                JMX, OSGi, Apache ActiveMQ, Apache Camel, Apache OpenEJB, Apache Tomcat, Jetty, JBoss and Fuse Fabric
              </p>
              <p>
                You can dynamically extend hawtio with your own plugins or automatically discover plugins inside the JVM.
              </p>
            </Col>
            <Col md={6} style={{ padding: '3rem' }}>
              <h3>Jolokia included</h3>
              <p>
                The only server side dependency (other than the static HTML/CSS/JS/images) is the excellent Jolokia
                library which has small footprint (around 300Kb) and is available as a JVM agent, or comes embedded
                as a servlet inside the hawtio-default.war or can be deployed as an OSGi bundle.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} style={{ padding: '3rem' }}>
              <h3>Baked with PatternFly</h3>
              <p>
                hawtio has lots of plugins such as: a git-based Dashboard and Wiki, logs, health,
                JMX, OSGi, Apache ActiveMQ, Apache Camel, Apache OpenEJB, Apache Tomcat, Jetty, JBoss and Fuse Fabric
              </p>
            </Col>
            <Col md={6} style={{ padding: '3rem' }}>
              <h3>Ready for cloud</h3>
              <p>
                hawtio has lots of plugins such as: a git-based Dashboard and Wiki, logs, health,
                JMX, OSGi, Apache ActiveMQ, Apache Camel, Apache OpenEJB, Apache Tomcat, Jetty, JBoss and Fuse Fabric
              </p>
              <p>
                You can dynamically extend hawtio with your own plugins or automatically discover plugins inside the JVM.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="container">
        <PageHeader>
          <h2>What's new?</h2>
        </PageHeader>
        TBD
      </div>
    </div>
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
