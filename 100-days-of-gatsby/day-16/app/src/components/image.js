import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      fixedImageExample: file(relativePath: { eq: "artistic-moth.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(quality: 100, width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluidImageExample: file(relativePath: { eq: "artistic-moth.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fluidImageExampleWithDuotone: file(
        relativePath: { eq: "artistic-moth.png" }
      ) {
        childImageSharp {
          fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fluidImageExampleWithGrayscale: file(
        relativePath: { eq: "artistic-moth.png" }
      ) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {/* <Img fixed={data.fixedImageExample.childImageSharp.fixed} alt="Fixed image example lovingly borrowed from the docs" /> */}
      <Img
        fluid={data.fluidImageExample.childImageSharp.fluid}
        alt="Fluid image example lovingly borrowed from the docs"
      />
      <Img
        fluid={data.fluidImageExampleWithDuotone.childImageSharp.fluid}
        alt="Fluid image example lovingly borrowed from the docs"
      />
      <Img
        fluid={data.fluidImageExampleWithGrayscale.childImageSharp.fluid}
        alt="Fluid image example lovingly borrowed from the docs"
      />
    </>
  )
}

export default Image
