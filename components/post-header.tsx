import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  updatedAt: string | undefined
}

const PostHeader = ({ title, coverImage, date, updatedAt }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mb-6 text-right">
        <ul>
          <li>
            <span>
              Created at: <DateFormatter dateString={date} />
            </span>
          </li> 
          { updatedAt && <li><span>
              Updated at: <DateFormatter dateString={updatedAt} />
        </span></li> }
        </ul>
      </div>
    </>
  )
}

export default PostHeader
