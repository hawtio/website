import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Stack } from 'react-bootstrap'
import '../css/site.css'
import Footer from './footer'
import Header from './header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Stack>
    <Header />
    <div style={{ marginTop: '57px' }}>{children}</div>
    <Footer />
  </Stack>
)

export default Layout
