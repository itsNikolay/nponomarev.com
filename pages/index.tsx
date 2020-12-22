import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import {CMS_NAME} from '../lib/constants'
import Post from '../types/post'
import Categories from '../components/Categories'
import {getAllPosts, sortPosts} from '../lib/posts'

type Props = {
  posts: Post[]
}

const Index = ({posts}: Props) => {
  const morePosts = posts
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Categories />
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts = sortPosts(getAllPosts()).map(p => p.data)

  return {
    props: {posts},
  }
}
