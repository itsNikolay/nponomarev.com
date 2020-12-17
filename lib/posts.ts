import fs, {readdirSync} from 'fs'
import matter, {GrayMatterFile} from "gray-matter"
import {join} from "path"

const postsDirectory = join(process.cwd(), '_posts')
const fullPath = (...dirs: string[]) => dirs.join('/')

const postsPathes = () =>
  readdirSync(postsDirectory).map((filename) =>
    fullPath(postsDirectory, filename))

const getAllPosts = () => postsPathes().map(postPath =>
  matter(fs.readFileSync(postPath, 'utf8')))

const postsByCategory = (category: string) =>
  getAllPosts().filter(({ data }) =>
    data.category == category)

const sortPosts = (posts: GrayMatterFile<string>[]) =>
  posts.sort((a, b) => (a.data.date < b.data.date ? 1 : -1))


export {
  sortPosts,
  postsPathes,
  getAllPosts,
  postsByCategory,
}
