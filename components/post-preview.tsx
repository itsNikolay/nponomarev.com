import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  category: string
  updatedAt: string | undefined
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  category,
}: Props) => {
  return (
    <div className="grid grid-cols-5">
      <div className="mt-2">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="ml-3 col-span-4">
        <div className="mb-3 text-3xl leading-snug">
          <Link as={`/posts/${category}/${slug}`} href="/posts/[category]/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </div>
        <div className="mb-4 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
