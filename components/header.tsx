import Link from 'next/link'

const Header = () => {
  return (
    <div className="mt-5 mb-5 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/">
        <a className="hover:underline">Nikolay&apos;s Blog</a>
      </Link>
    </div>
  )
}

export default Header
