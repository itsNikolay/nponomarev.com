import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import Head from 'next/head'
import Post from '../../types/post'
import {getAllPosts, sortPosts} from '../../lib/posts'

type Props = {
  posts: Post[]
}

const Index = ({posts}: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Nponomrev Blog about Web Development</title>
        </Head>
        <Container>
          {posts.length > 0 && <MoreStories posts={posts} />}
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


