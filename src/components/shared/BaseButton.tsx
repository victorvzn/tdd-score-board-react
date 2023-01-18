import { FC, ReactElement } from 'react'

interface BaseButtonProps {
  children: ReactElement
  backgroundColor?: string
  color?: string
  size?: string
  onClick?: () => void
}

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  backgroundColor = '#111',
  color = '#fff',
  size = 'large',
  onClick = () => {}
}) => {
  // size = 'small' | 'large'
  const fontSize = (size === 'large') ? '18px' : '14px'

  return <button style={{ fontSize, backgroundColor, color }} onClick={onClick}>{children}</button>
}

interface YellowButtonProps {
  children: ReactElement
  size: string
  onClick: () => void
}

export const YellowButton: FC<YellowButtonProps> = ({ children, size, onClick }) => {
  return <BaseButton size={size} color='#333' backgroundColor='#EE0' onClick={onClick}>{children}</BaseButton>
}
