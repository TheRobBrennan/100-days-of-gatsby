# Day 08 - Wednesday, January 8th, 2020

Today's focus is on the tutorial [Transformer plugins](https://www.gatsbyjs.org/tutorial/part-six/)

## Scratchpad

This tutorial uses the site we created in `day-07` as the starting point:

```sh
# Copy the day 06 example to a new folder
$ cp -r 100-days-of-gatsby/day-07 100-days-of-gatsby/day-08
```

### Transformer plugins

Often, the format of the data you get from source plugins isn’t what you want to use to build your website. The filesystem source plugin lets you query data **about** files but what if you want to query data **inside** files?

To make this possible, Gatsby supports transformer plugins which take raw content from source plugins and transform it into something more usable.

For example, markdown files. Markdown is nice to write in but when you build a page with it, you need the markdown to be HTML.

Add a markdown file to your site at `src/pages/sweet-pandas-eating-sweets.md` (This will become your first markdown blog post) and learn how to transform it to HTML using transformer plugins and GraphQL.

Once you save the file, look at `/my-files/` again—the new markdown file is in the table. This is a very powerful feature of Gatsby. Like the earlier siteMetadata example, source plugins can live-reload data. gatsby-source-filesystem is always scanning for new files to be added and when they are, re-runs your queries.

Add a transformer plugin that can transform markdown files:

```sh
$ npm install --save gatsby-transformer-remark
```

Then add it to the `gatsby-config.js` like normal.
