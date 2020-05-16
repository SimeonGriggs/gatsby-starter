import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ExamplePage = ({location}) => (
  <Layout location={location || ''}>
    <SEO title='Example page' />

    <div className='typography px-4 text-center py-16 md:py-32'>
      <h1>Example page</h1>
    </div>
  </Layout>
)

export default ExamplePage
