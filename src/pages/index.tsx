import { Link, PageProps, graphql, withPrefix } from 'gatsby'
import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Timeline } from 'react-twitter-widgets'
import Layout from '../components/layout'
import '../css/index.css'
import logo from '../images/hawtio_logo.svg'
import favicon from '../images/logo-128px.png'
import screenshotCamel from '../images/screenshots/camel-route.png'
import screenshotJmx from '../images/screenshots/jmx.png'
import screenshotSpringBoot from '../images/screenshots/spring-boot.png'

const Jumbotron: React.FC<{
  background?: string
  textAlign?: 'start' | 'center' | 'end'
  children: React.ReactNode
}> = ({ background = 'black', textAlign = 'start', children }) => (
  <div style={{ background, padding: '2rem 1rem', textAlign }}>
    <Container>{children}</Container>
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron>
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
      </Jumbotron>
      <Jumbotron background='#fff'>
        <h3>
          <Icon.Wrench style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Modular architecture
        </h3>
        <p>
          Hawtio is a <Link to='/docs/plugins/'>pluggable</Link> Web management console, built with the modern Web
          technologies such as <a href='https://react.dev/'>React</a> and{' '}
          <a href='https://www.patternfly.org/'>PatternFly</a>.
        </p>
        <p>
          The pluggable architecture is based on <a href='https://module-federation.io/'>Webpack Module Federation</a>{' '}
          and highly extensible; you can dynamically extend Hawtio with{' '}
          <a href='https://github.com/hawtio/hawtio-sample-plugin-ts'>your own plugins</a> or automatically discover
          plugins inside the JVM.
        </p>
      </Jumbotron>
      <Jumbotron background='#f8f9fa' textAlign='end'>
        <h3>
          <Icon.Plugin style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Plugins
        </h3>
        <p>
          Hawtio has <Link to='/docs/plugins/'>built-in plugins</Link> already to make it highly useful out of the box
          for your JVM application.
        </p>
        <p>
          The plugins include:{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/camel'>Apache Camel</a>,{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/connect'>Connect</a>,{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/jmx'>JMX</a>,{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/logs'>Logs</a>,{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/activemq'>Runtime</a>,{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/quartz'>Quartz</a>, and{' '}
          <a href='https://github.com/hawtio/hawtio-next/tree/main/packages/hawtio/src/plugins/spring-boot'>
            Spring Boot
          </a>
          .
        </p>
      </Jumbotron>
      <Jumbotron background='#fff'>
        <h3>
          <Icon.Fire style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Small footprint
        </h3>
        <p>
          The only server side dependency (other than the static HTML/CSS/JS/images) is the excellent{' '}
          <a href='https://jolokia.org'>Jolokia library</a> which is available as a JVM agent, embedded as a Servlet
          inside <code>hawtio-default.war</code>, or can be deployed as an OSGi bundle.
        </p>
      </Jumbotron>
      <Jumbotron background='#f8f9fa' textAlign='end'>
        <h3>
          <Icon.Stars style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Slick user experience
        </h3>
        <p>
          Hawtio is baked with <a href='https://www.patternfly.org'>PatternFly</a>, a UI framework for enterprise web
          applications.
        </p>
        <p>The stylish UI won't let you get bored with the management operations on JVM applications!</p>
      </Jumbotron>
      <Jumbotron background='#fff'>
        <h3>
          <Icon.Diagram3Fill style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> For microservices
        </h3>
        <p>
          Hawtio is primarily designed to be used with{' '}
          <a href='https://github.com/hawtio/hawtio/tree/main/examples/quarkus'>Quarkus</a> and{' '}
          <a href='https://github.com/hawtio/hawtio/tree/main/examples/springboot'>Spring Boot</a>. It's the tool for
          managing microservice applications.
        </p>
      </Jumbotron>
      <Jumbotron background='#f8f9fa' textAlign='end'>
        <h3>
          <Icon.CloudUpload style={{ verticalAlign: 'top', marginRight: '0.5rem' }} /> Cloud ready
        </h3>
        <p>Hawtio is cloud-native; it's ready to go over the cloud!</p>
        <p>
          You can deploy it to Kubernetes and OpenShift with{' '}
          <a href='https://github.com/hawtio/hawtio-online'>Hawtio Online</a>.
        </p>
      </Jumbotron>
      <Jumbotron background='#fff' textAlign='center'>
        <h3>
          Give it a try? <Icon.RocketTakeoffFill style={{ verticalAlign: 'top', marginLeft: '0.5rem' }} />
        </h3>
        <Button variant='primary' size='lg' href={withPrefix('/docs/get-started/')} style={{ marginTop: '1.5rem' }}>
          Get Started Now
        </Button>
      </Jumbotron>
      <hr />
      <Jumbotron background='#fff' textAlign='center'>
        <TwitterTimeline />
      </Jumbotron>
    </Layout>
  )
}

const TwitterTimeline = () => (
  <>
    <h3>What's New?</h3>
    <Timeline
      //dataSource={{ sourceType: 'profile', screenName: 'hawtio' }}
      dataSource={{ sourceType: 'url', url: 'https://twitter.com/hawtio' }}
      options={{
        dnt: true,
        //width: 700,
        height: 800,
        tweetLimit: 5,
        chrome: 'noheader nofooter noborders transparent',
      }}
      onLoad={() => console.log('Timeline is loaded!')}
      renderError={_error => 'Failed to load timelines from @hawtio'}
    />
  </>
)

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
