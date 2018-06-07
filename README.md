# Hawtio website

http://hawt.io

This website is built with [Gatsby](https://www.gatsbyjs.org). For more info on Gatsby, refer to [the Gatsby documentation](https://www.gatsbyjs.org/docs/).

## Prerequisites

You must have the following tools installed:

* [Node.js](http://nodejs.org)
* [Yarn](https://yarnpkg.com)

## Develop

To develop and test the website locally, install dependencies for the project:

    yarn install

Then run this command to develop:

    yarn develop

The website will be available at http://localhost:8000/. You can also utilise GraphiQL console at http://localhost:8000/___graphql.

## Publish

This command will rebuild the website under `docs/`:

    yarn deploy

Then commit the changes to `master` branch to publish the website:

    git add .
    git commit -m 'chore: deploy website'
    git push origin master
