import React from 'react'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Carousel,
  Button,
  PageHeader,
  Glyphicon
} from 'react-bootstrap'
import { Timeline } from 'react-twitter-widgets'
import { Link, graphql, withPrefix } from 'gatsby'
import Layout from '../components/layout'
import screenshotJmx from '../../static/images/screenshots/jmx.png'
import screenshotCamel from '../../static/images/screenshots/camel-route.png'
import screenshotSpringBoot from '../../static/images/screenshots/spring-boot.png'
import logo from '../../static/images/hawtio_logo.svg'

const IndexPage = ({ data }) => {
  const { description } = data.site.siteMetadata
  return (
    <Layout>
      <div>
        <Jumbotron style={{
          background: 'black'
        }}>
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={5}>
                <img alt="" src={logo} style={{ height: 100, margin: 0 }} />
                <h2 style={{ color: 'lightgrey', borderBottom: 0 }}>{description}</h2>
                <div style={{ marginTop: '4rem', marginBottom: '1rem' }}>
                  <Button bsStyle="primary" href={withPrefix('/docs/get-started/')}>Get Started Now</Button>
                </div>
              </Col>
              <Col xsHidden smHidden md={7}>
                <Carousel interval={5000} indicators={false} controls={false}>
                  <Carousel.Item>
                    <img alt="JMX MBeans" src={screenshotJmx} />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>JMX MBeans</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="Camel Routes" src={screenshotCamel} />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>Camel Routes</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="Spring Boot" src={screenshotSpringBoot} />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>Spring Boot</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="wrench" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Modular architecture
              </h3>
              <p>
                Hawtio is composed of a collection of <Link to="/docs/plugins/">plugins</Link>, each of which is an <a href="https://angularjs.org">AngularJS</a> module.
              </p>
              <p>
                This pluggable architecture is highly extensible, you can dynamically extend Hawtio with your own plugins or automatically discover plugins inside the JVM.
              </p>
            </Col>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="equalizer" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Plugins
              </h3>
              <p>
                Hawtio has <Link to="/docs/plugins/">lots of built-in plugins</Link> such as:{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/jmx">JMX</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/jvm">JVM</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/osgi">OSGi</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/logs">Logs</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/activemq">Apache ActiveMQ</a>,{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/camel">Apache Camel</a>, and{' '}
                <a href="https://github.com/hawtio/hawtio-integration/tree/master/plugins/spring-boot">Spring Boot</a>.
              </p>
            </Col>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="fire" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Small footprint
              </h3>
              <p>
                The only server side dependency (other than the static HTML/CSS/JS/images) is the
                excellent <a href="https://jolokia.org">Jolokia library</a> which is available as a JVM agent, embedded as a Servlet
                inside <code>hawtio-default.war</code> or can be deployed as an OSGi bundle.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="eye-open" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Slick user experience
              </h3>
              <p>
                Hawtio is baked with <a href="https://getbootstrap.com">Bootstrap</a> and{' '}
                <a href="https://www.patternfly.org">PatternFly</a>, a UI framework for enterprise web applications.
                The stylish UI won't let you get bored!
              </p>
            </Col>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="leaf" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> For microservices
              </h3>
              <p>
                Hawtio can be{' '}
                <a href="https://github.com/hawtio/hawtio/tree/master/examples/springboot">attached to a Spring Boot application in a snap</a>.
              </p>
            </Col>
            <Col md={4} style={{ padding: '2rem' }}>
              <h3>
                <Glyphicon glyph="cloud-upload" style={{
                  verticalAlign: 'top', marginRight: '0.5rem'
                }} /> Cloud ready
              </h3>
              <p>
                Hawtio is also <a href="https://github.com/hawtio/hawtio-online">ready to run</a> on <a href="https://kubernetes.io/">Kubernetes</a> and <a href="https://www.openshift.com/">OpenShift</a>.
              </p>
            </Col>
            <Col md={4} style={{ padding: '2rem', textAlign: 'center' }}>
              <h3>Give it a try?</h3>
              <Button
                bsStyle="primary"
                bsSize="large"
                href={withPrefix('/docs/get-started/')}
                style={{ marginTop: '1.5rem' }}>Get Started Now</Button>
            </Col>
          </Row>
        </Grid>
        <Grid style={{ marginTop: 50 }}>
          <Row>
            <Col md={12} style={{ textAlign: 'center' }}>
              <PageHeader>
                <h3>What's New?</h3>
              </PageHeader>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'hawtio'
                }}
                options={{
                  username: 'hawtio',
                  dnt: true,
                  chrome: 'noheader nofooter noborders transparent noscrollbar',
                  width: 700,
                  tweetLimit: 5
                }}
                onLoad={() => console.log('Timeline is loaded!')} />
            </Col>
          </Row>
        </Grid>
      </div>
    </Layout>
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
