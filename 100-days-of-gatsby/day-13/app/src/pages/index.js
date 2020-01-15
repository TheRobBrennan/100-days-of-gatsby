import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      This is the default site generated by the{" "}
      <a href="https://www.gatsbyjs.org/docs/gatsby-cli/" target="__blank">
        Gatsby CLI
      </a>{" "}
      and will be deployed to{" "}
      <a href="https://zeit.co" target="__blank">
        ZEIT Now
      </a>
    </p>
    <p>
      <strong>IMPORTANT:</strong> This demo assumes that you have created an
      account with{" "}
      <a href="https://zeit.co" target="__blank">
        ZEIT Now
      </a>{" "}
      and are prepared to deploy the project to your account.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage