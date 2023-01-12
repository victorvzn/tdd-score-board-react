
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

const ScoreBoard = (): JSX.Element => {
  return (
    <>
      <h1>Score Board</h1>
      <h2>Start Game</h2>
      <form>
        <input
          type='text'
          name='homeTeamName'
          placeholder='Home Team Name'
        />
        <input
          type='text'
          name='homeTeamScore'
          placeholder='Home Team Score'
        />
        <input
          type='text'
          name='awayTeamName'
          placeholder='Away Team Name'
        />
        <input
          type='text'
          name='awayTeamScore'
          placeholder='Away Team Score'
        />
      </form>
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

  it('should render "Start game" section', () => {
    render(<ScoreBoard />)

    screen.getByText('Start Game')
  })

  describe('Start a game', () => {
    it('should capture home team and away team names and scores', () => {
      render(<ScoreBoard />)

      screen.getByPlaceholderText('Home Team Name')
      screen.getByPlaceholderText('Home Team Score')

      screen.getByPlaceholderText('Away Team Name')
      screen.getByPlaceholderText('Away Team Score')
    })
  })
})
