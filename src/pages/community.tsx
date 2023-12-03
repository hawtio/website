import { Link, PageProps, graphql, withPrefix } from 'gatsby'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Layout from '../components/layout'
import octocatLogo from '../images/social/octocat.jpg'
import stackoverflowLogo from '../images/social/stackoverflow.png'
import ircIcon from '../images/irc.png'
import groupsIcon from '../images/groups.png'

const TitleImage: React.FC<{ src: string }> = props => (
  <img style={{ verticalAlign: 'middle', maxWidth: 48, maxHeight: 48, marginRight: 10 }} src={props.src} alt='' />
)

const CommunityPage: React.FC<
  PageProps<{
    site: {
      siteMetadata: {
        issueUrl: string
        forumUrl: string
        repositoryUrl: string
      }
    }
  }>
> = ({ data }) => {
  const { issueUrl, forumUrl, repositoryUrl } = data.site.siteMetadata
  return (
    <Layout>
      <Container style={{ marginTop: '3rem' }}>
        <h1>Community</h1>
        <p>
          Welcome to the <b>Hawtio</b> community! We <Link to='/docs/contributing/'>love contributions</Link>!
        </p>
        <p>
          <Button variant='primary' href={withPrefix('/docs/contributing/')}>
            How to Contribute
          </Button>
        </p>
        <p>
          Please dive in wherever takes your fancy! It's <i>hawt</i> but stay cool!
        </p>

        <h2>
          <TitleImage src={octocatLogo} /> Issue Tracker
        </h2>
        <p>The project tracks bugs, feature requests, and other issues through the GitHub issue tracking system.</p>
        <p>
          <Button variant='primary' href={issueUrl}>
            Hawtio issue tracker
          </Button>
        </p>
        <p>
          To file new issues or comment on existing issues you need to register for a{' '}
          <a href='https://github.com/'>GitHub account</a> which is quick and easy!
        </p>

        <h2>
          <TitleImage src={groupsIcon} /> Mailing List
        </h2>
        <p>
          We prefer to use the <a href={issueUrl}>issue tracker</a> for dealing with ideas and issues, but if you just
          want to chat about all things Hawtio please join us on the mailing list. Its pretty low volume though as we
          love <a href={issueUrl}>GitHub issues</a>
        </p>
        <p>
          <Button variant='primary' href={forumUrl}>
            Hawtio mailing list
          </Button>
        </p>

        <h2>
          <TitleImage src={ircIcon} /> Chat (IRC)
        </h2>
        <p>
          We invite you to join us in the <b>#hawtio</b> channel on <b>irc.freenode.net</b> to chat about Hawtio.
        </p>
        <p>
          This channel is logged to{' '}
          <a href='https://transcripts.jboss.org/channel/irc.freenode.org/%23hawtio/2013/index.html'>
            transcripts.jboss.org
          </a>{' '}
          by JBossBot. The JBossBot is also present to expand issue numbers from the issue tracker.
        </p>

        <h2>
          <TitleImage src={stackoverflowLogo} /> Stack Overflow
        </h2>
        <p>
          We also keep an eye out on Stack Overflow for questions which makes it really easy to find answers to
          questions and commonly found problems. Though if you're running into an issue please use our{' '}
          <a href='https://github.com/hawtio/hawtio/issues'>issue tracker</a> instead.
        </p>
        <p>
          <Button variant='primary' href='https://stackoverflow.com/questions/tagged/hawtio'>
            Stack Overflow
          </Button>
        </p>

        <h2>
          <TitleImage src={octocatLogo} /> Source Repository
        </h2>
        <p>
          All the Hawtio source code is managed using the distributed version system{' '}
          <a href='https://git-scm.com'>git</a> and hosted on <a href='https://github.com/hawtio/hawtio'>GitHub</a>.
        </p>
        <p>
          <Button variant='primary' href={repositoryUrl}>
            Hawtio @ GitHub
          </Button>
        </p>
        <p>
          Both git and GitHub are awesome for collaboration! To make improvements or bug fixes to the Hawtio project,
          simply fork the project, commit your changes, and send a pull request.
        </p>
      </Container>
    </Layout>
  )
}

export default CommunityPage

export const query = graphql`
  query CommunityQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        issueUrl
        forumUrl
        repositoryUrl
      }
    }
  }
`

export { Head } from './index'
