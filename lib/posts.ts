import {readdirSync} from "fs"
import {join} from "path"
// import matter from 'gray-matter'

interface DirStructure {
  [key: string]: string[]
}

const postsDirectory = join(process.cwd(), '_posts2')
// const content = (path: string) => matter(readFileSync(path, 'utf8'))
const fullPath = (...dirs: string[]) => dirs.join('/')
// const toContent = (category: string, filename: string) =>
//   content(fullPath(postsDirectory, category, filename))

const getAllPosts = (): DirStructure => (
  readdirSync(postsDirectory).reduce((acc, curr) => ({
    ...acc,
    [curr]: readdirSync(fullPath(postsDirectory, curr))
  }), {})
)

export {
  getAllPosts,
}
