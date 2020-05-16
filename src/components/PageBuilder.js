import React from 'react'

import PageBuilderContent from './PageBuilderContent'

function PageBuilder (props) {
  const {pageBuilder, _rawPageBuilder} = props

  // Load the right component, based on the _type from Sanity
  const Components = {
    pageBuilderContent: PageBuilderContent
  }

  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    // console.log(block)

    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        index,
        raw: _rawPageBuilder[index]
      })
    }
  })
}

export default PageBuilder
