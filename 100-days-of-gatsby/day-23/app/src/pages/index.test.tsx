import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

describe(`Index`, () => {
  it(`should have tests written`, () => {
    expect(true).toEqual(true)
  })

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
    const { getByText, debug } = render(<Index data={mockPageQuery} />)
    debug() // Display our rendered HTML

    const greeting = getByText(/Hello/)
    expect(greeting).toBeInTheDocument()

  })
})
