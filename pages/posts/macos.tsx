import Layout from '../../components/layout'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Post from '../../types/post'
import {postsByCategory, sortPosts} from '../../lib/posts'

type Props = {
  posts: Post[]
}

const Javascript = ({ posts }: Props) => {
  return (
    <Layout>
      <Container>
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = sortPosts(postsByCategory('macos')).map(p => p.data)

  return {
    props: { posts },
  }
}

export default Javascript
