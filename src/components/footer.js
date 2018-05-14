import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div style={{ marginTop: '1.5rem' }}>
    <footer style={{ margin: '0 auto', maxWidth: 750, padding: '1.25rem 1rem' }}>
      <div style={{ textAlign: 'center', fontSize: 'small' }}>
        <p>
          Website and docs licensed under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
          Code released under <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License, v2.0</a>.
        </p>
        <a href="http://www.redhat.com/">
          <img src="http://static.jboss.org/theme/images/common/redhat_logo.png" />
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
