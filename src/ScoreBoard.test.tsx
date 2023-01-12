
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

const ScoreBoard = (): JSX.Element => {
  return (
    <>
      <h1>Score Board</h1>
    </>
  )
}

describe('<ScoreBoard />', () => {
  it('should render', () => {
    render(<ScoreBoard />)
  })
})
