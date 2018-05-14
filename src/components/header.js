import React from 'react'
import Link from 'gatsby-link'

const HeaderList = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    {props.children}
  </li>

const Header = ({ siteTitle }) => (
  <div style={{
    //background: 'url(/images/banner.png)',
    background: 'black',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: '1.5rem'
  }}>
    <header style={{ margin: '0 auto', maxWidth: 750, padding: '1rem 1rem' }}>
      <Link to="/">
        <img src="/images/hawtio_logo.svg" style={{ height: 60, margin: 0 }} />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <HeaderList><Link to="/docs/get-started/" style={{ color: 'white' }}>Get Started</Link></HeaderList>
        <HeaderList><Link to="/docs/" style={{ color: 'white' }}>Docs</Link></HeaderList>
        <HeaderList><Link to="/community/" style={{ color: 'white' }}>Community</Link></HeaderList>
        <HeaderList><Link to="/docs/articles/" style={{ color: 'white' }}>Demos</Link></HeaderList>
        <HeaderList><a href="https://github.com/hawtio/hawtio" style={{ color: 'white' }}>GitHub</a></HeaderList>
      </ul>
    </header>
  </div>
)

export default Header
