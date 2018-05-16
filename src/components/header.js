import React from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

const ItemImage = props =>
  <img src={props.src} alt={props.alt} style={{ height: 20 }} />

const Header = ({ siteTitle }) => (
  <Navbar inverse fixedTop fluid collapseOnSelect style={{
    background: 'black'
    //background: 'url(/images/banner.png)',
    //backgroundPosition: 'center',
    //backgroundSize: 'cover'
  }}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src="/images/logo.png" alt="Hawtio" style={{ height: 30 }} /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav style={{ paddingTop: '0.5rem' }}>
        <NavItem eventKey={1} href="/" >Home</NavItem>
        <NavItem eventKey={2} href="/docs/get-started/">Get Started</NavItem>
        <NavItem eventKey={3} href="/docs/">Docs</NavItem>
        <NavItem eventKey={4} href="/docs/articles/">Demos</NavItem>
        <NavItem eventKey={4} href="https://github.com/hawtio/hawtio/releases">Download</NavItem>
        <NavItem eventKey={5} href="/community/">Community</NavItem>
      </Nav>
      <Nav pullRight style={{ paddingTop: '0.5rem' }}>
        <NavItem eventKey={1} href="https://github.com/hawtio/hawtio">
          <ItemImage src="/images/social/github-light-32.png" alt="GitHub" />
        </NavItem>
        <NavItem eventKey={2} href="https://twitter.com/hawtio">
          <ItemImage src="/images/social/twitter-white.png" alt="Twitter" />
        </NavItem>
        <NavItem eventKey={3}
          href="http://stackoverflow.com/questions/tagged/hawtio">
          <ItemImage src="/images/social/stackoverflow.png" alt="StackOverflow" />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
