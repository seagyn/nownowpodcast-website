import { getAllDocs, getDocBySlug } from '../lib/docs'
import markdownToHtml from '../lib/markdown'

const Episode = ({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>
}

export default Episode

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug)
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content
    }
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs()

  return {
    paths: docs.map(doc => {
      return {
        params: {
          slug: doc.slug
        }
      }
    }),
    fallback: false
  }
}