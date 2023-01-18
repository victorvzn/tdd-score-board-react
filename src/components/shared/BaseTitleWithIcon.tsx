import { FC, ReactElement } from 'react'
import BaseTitle from './BaseTitle'

interface BaseTitleProps {
  title: string
  children: ReactElement
}

const BaseTitleWithIcon: FC<BaseTitleProps> = ({ title, children }) => {
  return (
    <>
      <BaseTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>{title}</h2>
          {children}
        </div>
      </BaseTitle>
    </>
  )
}

export default BaseTitleWithIcon
