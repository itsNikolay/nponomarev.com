import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container justify-center px-5 m-auto mx-lg">
      <div className="grid grid-cols-5 gap-4">
        <div> </div>
    <div className="mb-32 lg:col-span-3 md:col-span-5 sm:col-span-5">
        {children}
    </div>
        <div> </div>
      </div>
    </div>
  )
}

export default Container
