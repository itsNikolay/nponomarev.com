import Layout from '../../components/layout'
import Container from '../../components/container'
import Post from '../../types/post'
import MoreStories from '../../components/more-stories'
import {postsByCategory, sortPosts} from '../../lib/posts'

type Props = {
  posts: Post[]
}

const Rails = ({ posts }: Props) => {
  return (
    <Layout>
      <Container>
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = sortPosts(postsByCategory('rails')).map(p => p.data)

  return {
    props: { posts },
  }
}

export default Rails
