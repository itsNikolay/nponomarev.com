import { categoriesList } from '../lib/categories'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className="flex max-w-full pt-6 pb-6 text-lg border-b-2 space-x-4">
      <Link href="/" key="/">
        <a aria-label="Root" className="hover:underline">
          Blog
        </a>
      </Link>
      { categoriesList.map(({ name, path }) =>
      <Link href={path} key={path}>
        <a aria-label={name} className="hover:underline">
          {name}
        </a>
      </Link>
      ) }
      <hr />
    </div>
    )
}

export default Categories
