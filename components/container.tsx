import React, { ReactNode } from 'react'
import Categories from './Categories'
import Intro from '../components/intro'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="container justify-center px-5 m-auto mx-lg">
      <Categories />
      <Intro />
      <div className="grid grid-cols-5 gap-6">
        <div />
        <div className="col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
