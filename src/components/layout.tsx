import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Stack } from 'react-bootstrap'
import '../css/styles.css'
import Footer from './footer'
import Header from './header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Stack>
    <Header />
    <div style={{ marginTop: '60px' }}>{children}</div>
    <Footer />
  </Stack>
)

export default Layout
