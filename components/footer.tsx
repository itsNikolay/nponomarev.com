import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t bg-accent-1 border-accent-2">
      <ul>
        <li>
          <span>
            Contact:
          </span>
          <Link
            href="mailto:me@nponomarev.com"
            passHref={true}
            replace
          >
            <a className="hover:underline">
              me@nponomarev.com
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/itsNikolay">
            <a className="hover:underline">
              Github.com/itsNikolay
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://stackoverflow.com/story/itsnikolay">
            <a>
              Stackoverflow.com/itsNikolay
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.upwork.com/fl/itsnikolay">
            <a>
              Upwork.com/itsNikolay
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
