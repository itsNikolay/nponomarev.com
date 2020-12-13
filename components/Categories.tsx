import { categoriesList } from '../lib/categories'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="inline-flex space-x-4">
      { categoriesList.map(({ name, path }) =>
      <Link href={path} key={path}>
        <a aria-label={name}>
          {name}
        </a>
      </Link>
      ) }
    </div>
    )
}

export default Categories
