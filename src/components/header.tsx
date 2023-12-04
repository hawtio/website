import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import hawtioLogo from '../images/logo-128px.png'
import githubLogo from '../images/social/github-light-32.png'
import stackoverflowLogo from '../images/social/stackoverflow.png'
import twitterLogo from '../images/social/twitter-white.png'

const ItemImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ height: 20, marginBottom: 0 }} />
)

const Header = () => (
  <Navbar
    variant='dark'
    fixed='top'
    expand='lg'
    collapseOnSelect
    style={{ background: 'black', paddingRight: '10px', paddingLeft: '10px' }}
  >
    <Navbar.Brand href='/'>
      <img src={hawtioLogo} alt='Hawtio' style={{ margin: 0, height: 30 }} />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className='justify-content-end'>
      <Nav>
        <Nav.Link eventKey={1} href={withPrefix('/')}>
          Home
        </Nav.Link>
        <Nav.Link eventKey={2} href={withPrefix('/docs/get-started.html')}>
          Get Started
        </Nav.Link>
        <Nav.Link eventKey={3} href={withPrefix('/docs/')}>
          Docs
        </Nav.Link>
        <Nav.Link eventKey={4} href={withPrefix('/docs/plugins.html')}>
          Plugins
        </Nav.Link>
        <Nav.Link eventKey={5} href='https://github.com/hawtio/hawtio/releases'>
          Download
        </Nav.Link>
        <Nav.Link eventKey={6} href={withPrefix('/community/')}>
          Community
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link eventKey={1} href='https://github.com/hawtio/hawtio'>
          <ItemImage src={githubLogo} alt='GitHub' />
        </Nav.Link>
        <Nav.Link eventKey={2} href='https://twitter.com/hawtio'>
          <ItemImage src={twitterLogo} alt='Twitter' />
        </Nav.Link>
        <Nav.Link eventKey={3} href='https://stackoverflow.com/questions/tagged/hawtio'>
          <ItemImage src={stackoverflowLogo} alt='StackOverflow' />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
