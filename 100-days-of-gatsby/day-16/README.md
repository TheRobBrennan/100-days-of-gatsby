# Day 16 - Thursday, January 16th, 2020

Today's focus is on exploring [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/).

One important note? `gatsby-image` is not a drop-in replacement for <img />. It’s optimized for responsive fixed width/height images and images that stretch the full-width of a container. There are also other ways to [work with images](https://www.gatsbyjs.org/docs/images-and-files/) in Gatsby that don’t require GraphQL.

## Scratchpad

To create a new Gatsby app, I will use `npx` to create a new [Gatsby](https://www.gatsbyjs.com) app using the latest version of the [Gatsby CLI](https://www.gatsbyjs.com):

```sh
# Navigate to the appropriate example directory
$ cd 100-days-of-gatsby/day-16

# Generate a new app using the latest version of the Gatsby CLI
$ npx gatsby new app

# Navigate to the app directory
$ cd app

# Install gatsby-image and related plugins
$ npm install --save gatsby-image gatsby-plugin-sharp gatsby-transformer-sharp

# Modify gatsby-config.js so that plugins contains a definition for gatsby-source-filesystem with options specifying images
# Modify gatsby-config.js so that gatsby-plugin-sharp and gatsby-transformer-sharp are defined in plugins
```
