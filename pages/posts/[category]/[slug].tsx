import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import PostHeader from '../../../components/post-header'
import Layout from '../../../components/layout'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import PostType from '../../../types/post'
import Categories from '../../../components/Categories'
import {findPostBySlug, getAllPosts} from '../../../lib/posts'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Categories />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <title>
                {post.title}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
              <meta
                name="description"
                content={post.excerpt}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
    category: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = findPostBySlug(params.category, params.slug)
  const content = await markdownToHtml(post?.content || '')

  return {
    props: {
      post: {
        ...post?.data,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPosts().map((post) => {
    return {
      params: {
        category: post.data.category,
        slug: post.data.slug
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
