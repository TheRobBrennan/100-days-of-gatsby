import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import BuyButton from "../components/BuyButton"

// Default to the development mode API key
const SNIPCART_TEST_API_KEY =
  "OWQ1NDc3ODItNTY2MC00NzQ1LTlkOGUtMTZkMzBiNzA3NGQxNjM3MTcwNjE5OTQ0NTQ4Nzk1"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const images = post.frontmatter.image.map(x => ({
    name: x.name,
    src: require(`./../../content/blog${post.frontmatter.path}${x.src}.jpg`),
  }))
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={`${post.frontmatter.title} | ${siteTitle}`}
        link={[
          {
            href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
            rel: "stylesheet",
            type: "text/css",
          },
        ]}
        script={[
          // {
          //   type: "text/javascript",
          //   src:
          //     "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
          // },
          // {
          //   type: "text/javascript",
          //   id: "snipcart",
          //   "data-api-key": process.env.SNIPCART_API_KEY || SNIPCART_TEST_API_KEY,
          //   src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
          // },
        ]}
      />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <BuyButton post={post.frontmatter} images={images} />
        <p />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        price
        id
        path
        description
        image {
          name
          src
        }
        customField {
          name
          values
        }
      }
    }
  }
`
