import Layout from '../../components/layout'
import Container from '../../components/container'
import Categories from '../../components/Categories'
import MoreStories from '../../components/more-stories'
import Post from '../../types/post'
import {postsByCategory, sortPosts} from '../../lib/posts'

type Props = {
  posts: Post[]
}

const ReactComponent = ({ posts }: Props) => {
  return (
    <Layout>
      <Container>
        <Categories />
        <div>Vim</div>
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = sortPosts(postsByCategory('vim')).map(p => p.data)

  return {
    props: { posts },
  }
}

export default ReactComponent
