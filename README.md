# Hawtio website

[![deploy](https://github.com/hawtio/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/hawtio/website/actions/workflows/deploy.yml)

https://hawt.io

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

## Deploy

This command will locally build the website under `docs/`:

    yarn deploy

## Contribute

Contributions are always welcome!

If you find anything to fix or improve in our docs, modify source files under `src/` and submit a pull request. Once the pull request is merged it is automatically published by the [GitHub workflow](https://github.com/hawtio/website/actions/workflows/deploy.yml).
