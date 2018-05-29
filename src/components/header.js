import React from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

import logo128px from '../../static/images/logo-128px.png';

import { withPrefix } from 'gatsby-link'

const ItemImage = props =>
  <img src={props.src} alt={props.alt} style={{ height: 20 }} />

const Header = ({ siteTitle }) => (
  <Navbar inverse fixedTop fluid collapseOnSelect style={{
    background: 'black',
    minHeight: 60
    //background: 'url(/images/banner.png)',
    //backgroundPosition: 'center',
    //backgroundSize: 'cover'
  }}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={logo128px} alt="Hawtio" style={{ margin: 0, height: 30 }} /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav style={{ paddingTop: '0.5rem' }}>
        <NavItem eventKey={1} href={withPrefix('/')}>Home</NavItem>
        <NavItem eventKey={2} href={withPrefix('/docs/get-started/')}>Get Started</NavItem>
        <NavItem eventKey={3} href={withPrefix('/docs/')}>Docs</NavItem>
        <NavItem eventKey={4} href={withPrefix('/docs/plugins/')}>Plugins</NavItem>
        <NavItem eventKey={5} href={withPrefix('/docs/articles/')}>Demos</NavItem>
        <NavItem eventKey={6} href="https://github.com/hawtio/hawtio/releases">Download</NavItem>
        <NavItem eventKey={7} href={withPrefix('/community/')}>Community</NavItem>
      </Nav>
      <Nav pullRight style={{ paddingTop: '0.5rem' }}>
        <NavItem eventKey={1} href="https://github.com/hawtio">
          <ItemImage src={withPrefix('/images/social/github-light-32.png')} alt="GitHub" />
        </NavItem>
        <NavItem eventKey={2} href="https://twitter.com/hawtio">
          <ItemImage src={withPrefix('/images/social/twitter-white.png')} alt="Twitter" />
        </NavItem>
        <NavItem eventKey={3}
          href="http://stackoverflow.com/questions/tagged/hawtio">
          <ItemImage src={withPrefix('/images/social/stackoverflow.png')} alt="StackOverflow" />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
