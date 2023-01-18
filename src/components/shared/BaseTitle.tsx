import { FC, ReactElement } from 'react'

interface BaseTitleProps {
  children: ReactElement
}

const BaseTitle: FC<BaseTitleProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default BaseTitle
