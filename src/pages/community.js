import React from 'react'
import Link from 'gatsby-link'
import { Button, PageHeader } from 'react-bootstrap'

import '../css/docs.css'

import { withPrefix } from 'gatsby-link'

const TitleImage = props =>
  <img style={{ verticalAlign: 'middle', maxWidth: 48, maxHeight: 48, marginRight: 10 }} src={props.src} />

const CommunityPage = ({ data }) => {
  const { siteMetadata } = data.site
  const issueUrl = siteMetadata.issueUrl
  const forumUrl = siteMetadata.forumUrl
  const repositoryUrl = siteMetadata.repositoryUrl
  return (
    <div className="container">
      <PageHeader>
        <h1>Community</h1>
      </PageHeader>

      <p>Welcome to the <b>Hawtio</b> community!  We <Link to="/docs/contributing/">love contributions</Link>!</p>
      <p><Button bsStyle="primary" href={withPrefix('/docs/contributing/')}>How to Contribute</Button></p>
      <p>Please dive in wherever takes your fancy!  It's <i>hawt</i> but stay cool!</p>

      <h2>
        <TitleImage src={withPrefix('/images/social/octocat.jpg')} /> Issue Tracker
      </h2>
      <p>The project tracks bugs, feature requests, and other issues through the GitHub issue tracking system.</p>
      <p><Button bsStyle="primary" href={issueUrl}>Hawtio issue tracker</Button></p>
      <p>
        To file new issues or comment on existing issues you need to register for a <a href="https://github.com/">GitHub account</a> which is quick and easy!
      </p>

      <h2>
        <TitleImage src={withPrefix('/images/groups.png')} /> Mailing List
      </h2>
      <p>
        We prefer to use the <a href={issueUrl}>issue tracker</a> for dealing with ideas and issues,
        but if you just want to chat about all things Hawtio please join us on the mailing list.
        Its pretty low volume though as we love <a href={issueUrl}>GitHub issues</a>
      </p>
      <p><Button bsStyle="primary" href={forumUrl}>Hawtio mailing list</Button></p>

      <h2>
        <TitleImage src={withPrefix('/images/irc.png')} /> Chat (IRC)
      </h2>
      <p>We invite you to join us in the <b>#hawtio</b> channel on <b>irc.freenode.net</b> to chat about Hawtio.</p>
      <p>
        This channel is logged to <a href="https://transcripts.jboss.org/channel/irc.freenode.org/%23hawtio/2013/index.html">transcripts.jboss.org</a> by JBossBot.
        The JBossBot is also present to expand issue numbers from the issue tracker.
      </p>

      <h2>
        <TitleImage src={withPrefix('/images/social/stackoverflow.png')} /> Stack Overflow
      </h2>
      <p>
        We also keep an eye out on Stack Overflow for questions which makes it really easy to find answers to questions
        and commonly found problems. Though if you're running into an issue please use our <a href="https://github.com/hawtio/hawtio/issues">issue tracker</a> instead.
      </p>
      <p><Button bsStyle="primary" href="https://stackoverflow.com/questions/tagged/hawtio">Stack Overflow</Button></p>

      <h2>
        <TitleImage src={withPrefix('/images/social/octocat.jpg')} /> Source Repository
      </h2>
      <p>
        All the Hawtio source code is managed using the distributed version system <a href="https://git-scm.com">git</a> and
        hosted on <a href="https://github.com/hawtio/hawtio">GitHub</a>.
      </p>
      <p><Button bsStyle="primary" href={repositoryUrl}>Hawtio @ GitHub</Button></p>
      <p>
        Both git and GitHub are awesome for collaboration!  To make improvements or bug fixes to the Hawtio project,
        simply fork the project, commit your changes, and send a pull request.
      </p>
    </div>
  )
}

export default CommunityPage

export const query = graphql`
  query CommunityQuery {
    site {
      siteMetadata {
        issueUrl
        forumUrl
        repositoryUrl
      }
    }
  }
`
