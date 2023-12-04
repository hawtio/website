import React from 'react'
import redhatLogo from '../images/redhat_logo.png'

const Footer = () => (
  <div style={{ backgroundColor: '#e9ecef', marginTop: '5rem' }}>
    <footer style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
      <div style={{ textAlign: 'center', fontSize: 'small' }}>
        <p>
          Website and docs licensed under <a href='https://creativecommons.org/licenses/by/3.0/'>CC BY 3.0</a>. Code
          released under <a href='https://www.apache.org/licenses/LICENSE-2.0.html'>Apache License, v2.0</a>.
        </p>
        <a href='https://www.redhat.com/'>
          <img alt='Red Hat Logo' src={redhatLogo} />
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
