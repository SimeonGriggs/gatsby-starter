import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageBuilder from '../components/PageBuilder'
import PortableText from '../components/PortableText'

export const query = graphql`
  query PagePageQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
        title
        description
        image {
          asset {
            fluid(maxWidth: 1200, maxHeight: 600) {
              src
            }
          }
        }
        _rawBody
        ...PageBuilder
    }
  }
`

const PageSingle = ({location, data, errors}) => {
  const {pageBuilder, _rawPageBuilder, title, _rawBody} = data.page

  return (
    <Layout location={location || ''}>
      <SEO
        title={page.title}
        description={page.description}
        image={page.image && page.image.asset ? page.image.asset.fluid.src : false}
        url={location.href}
      />

      {pageBuilder.length > 0 && (
        <PageBuilder
          pageBuilder={pageBuilder}
          _rawPageBuilder={_rawPageBuilder} />
      )}

      {!pageBuilder.length && (
        <section className='container mx-auto md:flex mt-16 md:mt-20 py-8 md:py-16'>
          <div className='md:w-1/12' />
          <div className='md:w-10/12'>
            <div className='typography px-4'>
              <h1>{title}</h1>
            </div>
            <div className='md:flex'>
              <div className='md:w-1/3 lg:w-2/5 md:order-last px-4' />
              {_rawBody && (
                <div className='typography md:w-2/3 lg:w-3/5 md:text-2xl px-4'>
                  <PortableText blocks={_rawBody} />
                </div>
              )}
            </div>
          </div>
          <div className='md:w-1/12' />
        </section>
      )}
    </Layout>
  )
}

export default PageSingle
