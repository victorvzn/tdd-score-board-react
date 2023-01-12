
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

const ScoreBoard = (): JSX.Element => {
  return (
    <>
      <h1>Score Board</h1>
    </>
  )
}

describe('<ScoreBoard />', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<ScoreBoard />)
  })

  it('should render title correctly', () => {
    render(<ScoreBoard />)

    screen.getByText('Score Board')
  })
})
