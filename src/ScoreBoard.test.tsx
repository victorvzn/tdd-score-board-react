
import React from 'react'

import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

import { ScoreBoard } from './ScoreBoard'

describe('<ScoreBoard />', () => {
  afterEach(cleanup)

  describe('ScoreBoard', () => {
    it('should render title correctly', () => {
      render(<ScoreBoard matches={[]} />)

      screen.getByText('Score Board')
    })
  })

  describe('Start a game', () => {
    it('should render "Start game" section', () => {
      render(<ScoreBoard matches={[]} />)

      screen.getByText('Start Game')
    })

    it('should capture home team and away team names and scores', () => {
      render(<ScoreBoard matches={[]} />)

      screen.getByPlaceholderText('Home Team Name')
      screen.getByPlaceholderText('Home Team Score')

      screen.getByPlaceholderText('Away Team Name')
      screen.getByPlaceholderText('Away Team Score')
    })

    it('should be initial score 0 - 0', () => {
      render(<ScoreBoard matches={[]} />)

      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      expect(homeTeamScore.value).toBe('0')
      expect(awayTeamScore.value).toBe('0')
    })
  })

  describe('End a game', () => {
    it('should invoke handleEndGame given submitted form', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard matches={[]} />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      await user.type(homeTeamName, 'Peru')
      await user.type(homeTeamScore, '5')

      await user.type(awayTeamName, 'Nigeria')
      await user.type(awayTeamScore, '2')

      await user.click(finishGameButton)

      screen.getByRole('row', { name: /Peru 5 Nigeria 2/i })
    })

    it.skip('should disable finish game button if not "home match and away match" provide', async () => {
      //
    })

    it('should show a red message if not "home match or away match" provide', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard matches={[]} />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      await user.type(homeTeamName, 'TEAM 1')
      await user.clear(awayTeamName)
      await user.click(finishGameButton)

      expect(screen.getByText('Away team name is required')).toBeInTheDocument()

      await user.clear(homeTeamName)
      await user.type(awayTeamName, 'TEAM 2')
      await user.click(finishGameButton)

      expect(screen.getByText('Home team name is required')).toBeInTheDocument()
    })

    it('should remove a match from the scoreboard', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard matches={[]} />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      await user.type(homeTeamName, 'Peru')
      await user.type(homeTeamScore, '5')

      await user.type(awayTeamName, 'Nigeria')
      await user.type(awayTeamScore, '2')

      await user.click(finishGameButton)

      expect(homeTeamName.value).toBe('')
      expect(homeTeamScore.value).toBe('0')

      expect(awayTeamName.value).toBe('')
      expect(awayTeamScore.value).toBe('0')
    })

    it('should list a match after finish game', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard matches={[]} />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      await user.type(homeTeamName, 'Peru')
      await user.type(homeTeamScore, '6')

      await user.type(awayTeamName, 'Nigeria')
      await user.type(awayTeamScore, '3')

      await user.click(finishGameButton)

      // screen.getByText('Peru')
      // screen.getByText('6')
      // screen.getByText('Nigeria')
      // screen.getByText('3')

      screen.getByRole('row', { name: /Peru 6 Nigeria 3/i })
    })

    it('should list matches after finish game', async () => {
      const user = userEvent.setup()

      render(<ScoreBoard matches={[]} />)

      const homeTeamName: HTMLInputElement = screen.getByPlaceholderText('Home Team Name')
      const homeTeamScore: HTMLInputElement = screen.getByPlaceholderText('Home Team Score')
      const awayTeamName: HTMLInputElement = screen.getByPlaceholderText('Away Team Name')
      const awayTeamScore: HTMLInputElement = screen.getByPlaceholderText('Away Team Score')

      const finishGameButton: HTMLButtonElement = screen.getByText('Finish Game')

      await user.type(homeTeamName, 'Peru')
      await user.type(homeTeamScore, '7')

      await user.type(awayTeamName, 'Nigeria')
      await user.type(awayTeamScore, '4')

      await user.click(finishGameButton)

      screen.getByRole('row', { name: /Peru 7 Nigeria 4/i })

      await user.type(homeTeamName, 'Netherlands')
      await user.type(homeTeamScore, '2')

      await user.type(awayTeamName, 'Argentina')
      await user.type(awayTeamScore, '2')

      await user.click(finishGameButton)

      screen.getByRole('row', { name: /Netherlands 2 Argentina 2/i })
    })
  })
})
