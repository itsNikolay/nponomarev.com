import { GrayMatterFile } from 'gray-matter'
import { getAllPosts, postsPathes, postsByCategory, sortPosts, findPostBySlug } from './posts'

it('#postsPathes', () => {
  expect(postsPathes()[0]).toMatch(/.md/)
})

it('#getAllPosts', () => {
  const post = getAllPosts()[0]
  expect(post.content.length).toBeGreaterThan(0)
  expect(post.data.category).toEqual('nextjs')
})

it('#postsByCategory', () => {
  const posts = postsByCategory('rails')
  expect(posts?.map((post) => post.data.category)).toContain('rails')
})

it('#sortPosts', () => {
  const posts = postsByCategory('rails')
  const dates = (post: GrayMatterFile<string>) => post.data.date
  const days = (date: Date) => new Date(date).getDate()
  expect(sortPosts(posts).map(dates).map(days)).toContain(27)
})

xit('#findPostBySlug', () => {
  const post = findPostBySlug('rails', 'rails-review-mode')
  expect(post?.data?.slug).toEqual('rails-review-mode')
})
