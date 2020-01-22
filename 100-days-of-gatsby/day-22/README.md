# Day 22 - Wednesday, January 22nd, 2020

Today's focus is on [exploring TypeScript with Gatsby](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript)

## Scratchpad

To create a new Gatsby app, I will use `npx` to create a new [Gatsby](https://www.gatsbyjs.com) app using the latest version of the [Gatsby CLI](https://www.gatsbyjs.com):

```sh
# Generate a new app using the latest version of the Gatsby CLI
$ npx gatsby new app
  # OPTIONAL: Copy the Dockerized Gatsby CLI example to an appropriate folder for a faster starting point
  $ cp -r 100-days-of-gatsby/default-gatsby-cli-app-dockerized 100-days-of-gatsby/day-##

# Navigate to the appropriate example directory
$ cd 100-days-of-gatsby/day-##

# Navigate to the app directory
$ cd app
```

### Setup TypeScript for Gatsby

First, let's install TypeScript and our required dev dependencies:

```sh
# Install TypeScript
$ npm i -D typescript

# Install types and definitions for node and React
$ npm i -D @types/node @types/react @types/react-dom

# Install ESLint, plugins, types, and definitions
$ npm i --force -D eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
  # TROUBLESHOOTING: If there is an issue of a file existing, remove node_modules and try reinstalling
```

Next, let's install the Gatsby TypeScript plugin:

```sh
# Install the Gatsby typescript plugin
$ npm i gatsby-plugin-typescript
```
