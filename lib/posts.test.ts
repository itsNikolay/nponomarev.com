import { getAllPosts } from './posts'

it('#getAllPosts', () => {
  const posts = getAllPosts()
  const {keys} = Object

  expect(keys(posts)).toEqual(['javascript', 'rails'])
  expect(posts['rails']).toEqual(['dynamic-routing.md'])
})
