import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"

const defaultProps = {
  linkText: `View the source`,
}

type SourceProps = { description: string, data?: any } & typeof defaultProps

type UrlProps = {
  site: {
    siteMetadata: {
      exampleUrl: string
    }
  }
}

type PureComponentProps = {
  description: string,
  linkText: string,
  data?: any,
}

// TIP: Create a PureComponent for testing purposes
// TODO: Write a separate source.test.tsx file to test the pure component
export const PureSourceComponent = ({ data, description, linkText }: PureComponentProps) => {
  const href = (data && data.site.siteMetadata.exampleUrl)
  const target = (href && '__blank')

  return (
    <>
      <p>
        {description} <br /> <a href={href} target={target}>{linkText}</a>
      </p>
    </>
  )
}

const Source = (props: SourceProps): ReactElement => {
  const data = useStaticQuery<UrlProps>(graphql`
    query {
      site {
        siteMetadata {
          exampleUrl
        }
      }
    }
  `)

  // Note that we are explicitly passing in a data prop to our PureSourceComponent
  //  WHY? We want our component to use data generated from the static query in a live Gatsby app;
  //  however if that is undefined it means we are in a testing environment and need to supply our data.
  //
  // In the case of this Source component - which we are incorporating into our index page - the index page
  // test will fail because the mock query result that we sent to it will not automatically get passed down
  // to children components.
  return (
    <PureSourceComponent {...props} data={data || props.data} />
  )
}

export default Source

Source.defaultProps = defaultProps
