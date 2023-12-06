# Hawtio website

[![deploy](https://github.com/hawtio/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/hawtio/website/actions/workflows/deploy.yml)

<https://hawt.io>

This website is built with [Gatsby](https://www.gatsbyjs.com/) and the documentation is rendered using [Antora](https://antora.org/). For more info on the tools, refer to each documentation:

- <https://www.gatsbyjs.com/docs/>
- <https://docs.antora.org/antora/latest/>

## Prerequisites

You must have the following tools installed:

- [Node.js](http://nodejs.org) (>=18)
- [Yarn](https://yarnpkg.com) (>=3)

## Develop

To develop and test the website locally, install dependencies for the project:

```console
yarn install
```

Then run this command to develop:

```console
yarn start
```

The website built with Gatsby will be available at <http://localhost:8000/>, and the documentation by Antora will be at <http://localhost:8001/>.

While the changes under `src/` are automatically detected and rebuilt by the `gatsby develop` feature, those under `modules/` are not. You need to manually run the following command to update the documentation in preview:

```console
yarn build:docs
```

## Deploy

This command will locally build the website and documentation and merge them to `public/`:

```console
yarn build
```

Deployment is yet to be implemented.

```console
yarn deploy
```

## Contribute

Contributions are always welcome!

If you find anything to fix or improve in our docs, modify source files under `src/` or `modules/` and submit a pull request. Once the pull request is merged it is automatically published by the [GitHub workflow](https://github.com/hawtio/website/actions/workflows/deploy.yml).
