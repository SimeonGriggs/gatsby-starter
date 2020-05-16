import React from 'react'
import Button from './Button'

const serializers = {
  types: {
    undefined: ({node}) => '',
    blockquote: ({node}) => (
      <blockquote>
        {node.quote}
        {node.cite && (
          <cite>{node.cite}</cite>
        )}
      </blockquote>
    ),
    button: ({node}) => (<p><Button target='_blank' rel='noopener' file={node.file} href={node.link} text={node.text} /></p>)
  }
}

export default serializers
