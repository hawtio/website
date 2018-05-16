import React from 'react'
import Link from 'gatsby-link'

const HeaderList = props =>
  <li style={{ display: 'inline-block', marginRight: '2rem' }}>
    {props.children}
  </li>

const LinkItem = props =>
  <HeaderList>
    <Link to={props.to} style={{ color: 'white' }}>
      {props.children}
    </Link>
  </HeaderList>

const ImageItem = props =>
  <HeaderList>
    <a href={props.href}>
      <img src={props.src} style={{ height: 20, marginLeft: '0.5rem' }} />
    </a>
  </HeaderList>

const Header = ({ siteTitle }) => (
  <div style={{
    background: 'black'
    //background: 'url(/images/banner.png)',
    //backgroundPosition: 'center',
    //backgroundSize: 'cover'
  }}>
    <header style={{ height: 50, margin: '0 auto', padding: '1rem 5rem' }}>
      <ul style={{ listStyle: 'none', float: 'left' }}>
        <LinkItem to="/">
          <img src="/images/logo.png" style={{ height: 30, marginRight: '1rem' }} /> Home
        </LinkItem>
        <LinkItem to="/docs/get-started/">Get Started</LinkItem>
        <LinkItem to="/docs/">Docs</LinkItem>
        <LinkItem to="/docs/articles/">Demos</LinkItem>
        <LinkItem to="/community/">Community</LinkItem>
      </ul>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ImageItem
          href="https://github.com/hawtio/hawtio"
          src="/images/social/github-light-32.png" />
        <ImageItem
          href="https://twitter.com/hawtio"
          src="/images/social/twitter-white.png" />
        <ImageItem
          href="http://stackoverflow.com/questions/tagged/hawtio"
          src="/images/social/stackoverflow.png" />
      </ul>
    </header>
  </div>
)

export default Header
