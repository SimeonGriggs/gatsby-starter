// import PropTypes from 'prop-types'
import React from 'react'

import Form from './Form'
import PortableText from './PortableText'

const PageBuilderContent = ({block, raw, index}) => {
  const {title} = block
  const showForm = false

  return (
    <section className='container mx-auto'>
      <div className='typography'>
        <h1>{title}</h1>

        <PortableText blocks={raw.body} />

        {showForm && <Form />}
      </div>
    </section>
  )
}

PageBuilderContent.propTypes = {
//   siteTitle: PropTypes.string
}

PageBuilderContent.defaultProps = {
//   siteTitle: ``
}

export default PageBuilderContent
