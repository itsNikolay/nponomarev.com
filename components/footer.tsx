import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t bg-accent-1 border-accent-2">
      <span>
        Contact: <Link href="mailto:me@nponomarev.com" passHref={true} replace>
          me@nponomarev.com
        </Link>
      </span>
    </footer>
  )
}

export default Footer
