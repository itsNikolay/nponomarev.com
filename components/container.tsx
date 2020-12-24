import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container justify-center px-5 m-auto mx-lg">{children}</div>
}

export default Container
