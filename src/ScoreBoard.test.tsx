
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

import React, { useState } from 'react'

const ScoreBoard = (): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: '0',
    awayTeamName: '',
    awayTeamScore: '0'
  }

  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setForm(DEFAULT_FORM)
  }

  return (
    <>
      <h1>Score Board</h1>
      <h2>Start Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='homeTeamName'
          placeholder='Home Team Name'
          value={form.homeTeamName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='homeTeamScore'
          placeholder='Home Team Score'
          value={form.homeTeamScore}
          onChange={handleChange}
        />
        <input
          type='text'
          name='awayTeamName'
          placeholder='Away Team Name'
          value={form.awayTeamName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='awayTeamScore'
          placeholder='Away Team Score'
          value={form.awayTeamScore}
          onChange={handleChange}
        />
        <button>Finish Game</button>
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

    it('should be initial score 0 - 0', () => {
      render(<ScoreBoard />)

      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      expect(homeTeamScore.value).toBe('0')
      expect(awayTeamScore.value).toBe('0')
    })
  })

  describe('End a game', () => {
    it('will remove a match from the scoreboard', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      homeTeamName.defaultValue = 'Peru'
      homeTeamScore.defaultValue = '6'

      awayTeamName.defaultValue = 'Nigeria'
      awayTeamScore.defaultValue = '3'

      await user.click(finishGameButton)

      expect(homeTeamName.value).toBe('')
      expect(homeTeamScore.value).toBe('0')

      expect(awayTeamName.value).toBe('')
      expect(awayTeamScore.value).toBe('0')
    })
  })
})
