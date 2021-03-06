import {graphql} from 'gatsby'

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: {maxDepth: 10})
    pageBuilder {
      ... on SanityPageBuilderContent {
        _key
        _type
        title
        titleIsH1
        splitTitle
        showForm
        contentLeft
        image {
          alt
          asset {
            fluid(maxWidth: 800)  {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
