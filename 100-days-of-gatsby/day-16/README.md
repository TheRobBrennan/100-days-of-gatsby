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

### Gatsby image starts with a query

To feed file data in to Gatsby Image, set up a GraphQL query and either pass it into a component as props or write it directly in the component. One technique is to leverage the `useStaticQuery` hook.

Common GraphQL queries for sourcing images include `file` from `gatsby-source-filesystem`, and both `imageSharp` and `allImageSharp` from `gatsby-plugin-sharp`, but ultimately the options available to you will depend on your content sources.

### Types of images with gatsby-image

Gatsby image objects are created through GraphQL methods. There are two types of image optimizations available, *fixed* and *fluid*, which create multiple image sizes (1x, 1.5x, etc.). There is also the resize method, which returns a single image.

#### Images with a fixed width and height

Automatically create images for different resolutions at a set width or height — Gatsby creates responsive images for `1x`, `1.5x`, and `2x` pixel densities using the `<picture>` element.

Once you’ve queried for a fixed image to retrieve its data, you can pass that data into the `Img` component.

##### Fixed image query parameters

In a query, you can specify options for fixed images:

+ width (int, default: 400)
+ height (int)
+ quality (int, default: 50)

Returns

+ base64 (string)
+ aspectRatio (float)
+ width (float)
+ height (float)
+ src (string)
+ srcSet (string)

This is where fragments like `GatsbyImageSharpFixed` come in handy, as they’ll return all the above items in one line without having to type them all out.
