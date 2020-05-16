import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({location}) => (
  <Layout location={location || ''}>
    <SEO title='404: Not found' />

    <div className='typography px-4 text-center py-16 md:py-32'>
      <h1>Page not found</h1>
      <p><a href='/'>Return Home</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
