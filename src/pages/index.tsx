import { Link, PageProps, graphql, withPrefix } from 'gatsby'
import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Timeline } from 'react-twitter-widgets'
import Layout from '../components/layout'
import logo from '../images/hawtio_logo.svg'
import favicon from '../images/logo-128px.png'
import screenshotCamel from '../images/screenshots/camel-route.png'
import screenshotJmx from '../images/screenshots/jmx.png'
import screenshotSpringBoot from '../images/screenshots/spring-boot.png'

const Jumbotron: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: 'black', padding: '2rem 1rem' }}>{children}</div>
)

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={5}>
              <h1>
                <img alt='Hawtio Logo' src={logo} style={{ height: '100px', marginTop: '3rem' }} />
              </h1>
              <h2 style={{ color: 'lightgrey', marginTop: '1rem', borderBottom: 0 }}>
                A modular web console for managing your Java stuff
              </h2>
              <div style={{ marginTop: '4rem', marginBottom: '1rem' }}>
                <Button variant='primary' href={withPrefix('/docs/get-started.html')}>
                  Get Started Now
                </Button>
              </div>
            </Col>
            <Col xsHidden smHidden md={7}>
              <Carousel variant='dark' interval={5000} indicators={false} controls={false}>
                <Carousel.Item>
                  <img alt='Camel' src={screenshotCamel} />
                  <Carousel.Caption>
                    <h3 style={{ paddingBottom: '1.5rem' }}>Camel Routes</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt='JMX' src={screenshotJmx} />
                  <Carousel.Caption>
                    <h3 style={{ paddingBottom: '1.5rem' }}>JMX MBeans</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt='Spring Boot' src={screenshotSpringBoot} />
                  <Carousel.Caption>
                    <h3 style={{ paddingBottom: '1.5rem' }}>Spring Boot</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.Wrench style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Modular architecture
            </h3>
            <p>
              Hawtio is composed of a collection of <Link to='/docs/plugins/'>plugins</Link>, each of which is an{' '}
              <a href='https://angularjs.org'>AngularJS</a> module.
            </p>
            <p>
              This pluggable architecture is highly extensible, you can dynamically extend Hawtio with your own plugins
              or automatically discover plugins inside the JVM.
            </p>
          </Col>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.Plugin style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Plugins
            </h3>
            <p>
              Hawtio has <Link to='/docs/plugins/'>lots of built-in plugins</Link> such as:{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/jmx'>JMX</a>,{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/jvm'>JVM</a>,{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/osgi'>OSGi</a>,{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/logs'>Logs</a>,{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/activemq'>Apache ActiveMQ</a>,{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/camel'>Apache Camel</a>, and{' '}
              <a href='https://github.com/hawtio/hawtio-integration/tree/master/plugins/spring-boot'>Spring Boot</a>.
            </p>
          </Col>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.Fire style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Small footprint
            </h3>
            <p>
              The only server side dependency (other than the static HTML/CSS/JS/images) is the excellent{' '}
              <a href='https://jolokia.org'>Jolokia library</a> which is available as a JVM agent, embedded as a Servlet
              inside <code>hawtio-default.war</code> or can be deployed as an OSGi bundle.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.Stars
                style={{
                  verticalAlign: 'top',
                  marginRight: '0.5rem',
                }}
              />{' '}
              Slick user experience
            </h3>
            <p>
              Hawtio is baked with <a href='https://getbootstrap.com'>Bootstrap</a> and{' '}
              <a href='https://www.patternfly.org'>PatternFly</a>, a UI framework for enterprise web applications. The
              stylish UI won't let you get bored!
            </p>
          </Col>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.Diagram3Fill
                style={{
                  verticalAlign: 'top',
                  marginRight: '0.5rem',
                }}
              />{' '}
              For microservices
            </h3>
            <p>
              Hawtio can be{' '}
              <a href='https://github.com/hawtio/hawtio/tree/master/examples/springboot'>
                attached to a Spring Boot application in a snap
              </a>
              .
            </p>
          </Col>
          <Col md={4} style={{ padding: '2rem' }}>
            <h3>
              <Icon.CloudUpload
                style={{
                  verticalAlign: 'top',
                  marginRight: '0.5rem',
                }}
              />{' '}
              Cloud ready
            </h3>
            <p>
              Hawtio is also <a href='https://github.com/hawtio/hawtio-online'>ready to run</a> on{' '}
              <a href='https://kubernetes.io/'>Kubernetes</a> and <a href='https://www.openshift.com/'>OpenShift</a>.
            </p>
          </Col>
          <Col md={4} style={{ padding: '2rem', textAlign: 'center' }}>
            <h3>Give it a try?</h3>
            <Button
              bsStyle='primary'
              bsSize='large'
              href={withPrefix('/docs/get-started/')}
              style={{ marginTop: '1.5rem' }}
            >
              Get Started Now
            </Button>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={12} style={{ textAlign: 'center' }}>
            <h3>What's New?</h3>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'hawtio',
              }}
              options={{
                username: 'hawtio',
                dnt: true,
                chrome: 'noheader nofooter noborders transparent noscrollbar',
                width: 700,
                tweetLimit: 5,
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: React.FC<
  PageProps<{
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string
      }
    }
  }>
> = ({ data }) => {
  const { title, description, keywords } = data.site.siteMetadata
  return (
    <>
      <title>
        {title} - {description}
      </title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='shortcut icon' type='image/png' href={favicon} />
    </>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
