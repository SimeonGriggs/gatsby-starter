import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} />
)

export default PortableText
