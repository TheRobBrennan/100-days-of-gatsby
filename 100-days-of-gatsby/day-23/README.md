# Day 23 - Thursday, January 23rd, 2020

After experiencing some surprising behavior with writing tests for the simple app I created yesterday, I wanted to really dive into what some of the gotchas were.

Ultimately I'd love to incorporate this into a blog post at some point, but currently there are way too many other pressing priorities to give that draft an estimated timeline.

## Thinking out loud

First, let's verify that our app is in a happy state.

After you have started the application, open a terminal window so that you can run Jest in watch mode:

```sh
$ npm run test:watch
```

Assuming you have started the application, please visit [http://localhost:8000](http://localhost:8000) and inspect the link `View the source`.

You should see something like:

![screenshots/screenshot-00.png](screenshots/screenshot-00.png)

## Time to get our hands dirty

OK. Let's see what happens when we start from a naive implementation of this default page with the following implementation:

+ Our `IndexPage` component contains a Gatsby GraphQL page query to supply it with the `siteName` from the Gatsby config metadata
+ Our `IndexPage` component contains a `Source` component that uses a Gatsby GraphQL static query to supply it the URL of a GitHub repo

### Example 1: Mock the page query

For this example, we're going to tweak the `IndexPage` so that it appears as follows:

```jsx
// src/pages/index.tsx
import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string,
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`
  public render() {
    // Add logging to see what data is getting passed in
    console.log(`this.props.data: ${JSON.stringify(this.props.data, null, 2)}`)

    const { siteName } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <h1>{siteName}</h1>
        <p>
          {this.hello}.
        </p>
      </Layout>
    )
  }
}
```

If we open our dev tools in our browser, we should see that we are getting our metadata from `gatsby-config.js`:

![screenshots/screenshot-01.png](screenshots/screenshot-01.png)

Next, we'll want to create a test for this page and make sure that we mock out the GraphQL page query response. Remember - Gatsby will build our pages and inject the GraphQL data where appropriate. In a test environment, we do not have the page with rendered GraphQL data. We must supply it ourselves:

```jsx
// src/pages/index.test.tsx
import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

describe(`IndexPage`, () => {
  it(`contains a greeting`, () => {
    // Create mock data here. IndexPage will have the result of pageQuery available as this.props.data;
    // we can simulate that GraphQL response here by passing in an explicit data prop
    const mockPageQuery = {
      site: {
        siteMetadata: {
          siteName: 'Using Jest to mock GraphQL',
          exampleUrl: 'https://myfakesite.com',
        }
      }
    }
    const { getByText } = render(<Index data={mockPageQuery} />)

    const greeting = getByText(/Hello/)
    expect(greeting).toBeInTheDocument()

  })
})
```

To verify this is working properly, take a peek at both the test output as well as the console logs in your browser:

![screenshots/screenshot-02.png](screenshots/screenshot-02.png)

Notice how we are explicitly passing our `mockPageQuery` as a `data` prop to our `IndexPage` component. This gives us the exact shape and sample data that our `IndexPage` component receives from the GraphQL data injected by Gatsby.

Why?

Let's see what happens when we modify our test file to this:

```jsx
    const { getByText } = render(<Index />)
```

Notice how our use of TypeScript here allows VS Code to scream loudly at us that we have a problem:

![screenshots/screenshot-05.png](screenshots/screenshot-05.png)

We're going to be bad engineers and ignore this warning to see what happens:

![screenshots/screenshot-03a.png](screenshots/screenshot-03a.png)

![screenshots/screenshot-03b.png](screenshots/screenshot-03b.png)

Sure enough, our test fails because we do not have any data passed into `IndexPage` - however, our Gatsby page still renders as expected with the GraphQL data it has been supplied with:

![screenshots/screenshot-04.png](screenshots/screenshot-04.png)

Let's fix our test and verify that our `IndexPage` component is receiving data correctly from our test as well as from Gatsby:

```jsx
// src/pages/index.test.tsx
import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

describe(`IndexPage`, () => {
  it(`contains a greeting`, () => {
    // Create mock data here. IndexPage will have the result of pageQuery available as this.props.data;
    // we can simulate that GraphQL response here by passing in an explicit data prop
    const mockPageQuery = {
      site: {
        siteMetadata: {
          siteName: 'Using Jest to mock GraphQL',
          exampleUrl: 'https://myfakesite.com',
        }
      }
    }
    const { getByText } = render(<Index data={mockPageQuery} />)

    const greeting = getByText(/Hello/)
    expect(greeting).toBeInTheDocument()

  })
})
```
