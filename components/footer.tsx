import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
