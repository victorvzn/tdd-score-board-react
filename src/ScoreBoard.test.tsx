
import React from 'react'

import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import { ScoreBoard, MatchState } from './ScoreBoard'

describe('<ScoreBoard />', () => {
  afterEach(cleanup)

  describe('ScoreBoard', () => {
    it('should render title correctly', () => {
      render(<ScoreBoard />)

      screen.getByText('Score Board')
    })
  })

  describe('Start a game', () => {
    it('should render "Start game" section', () => {
      render(<ScoreBoard />)

      screen.getByText('Start Game')
    })

    it('should capture home team and away team names and scores', () => {
      render(<ScoreBoard />)

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

      const mockHandleEndGame = vi.fn()

      render(<ScoreBoard handleEndGame={mockHandleEndGame} />)

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

      expect(mockHandleEndGame).toHaveBeenCalledTimes(1)

      expect(mockHandleEndGame).toHaveBeenCalledWith({
        homeTeamName: 'Peru',
        homeTeamScore: 5,
        awayTeamName: 'Nigeria',
        awayTeamScore: 2
      })
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

    it('should render title correctly', async () => {
      render(<ScoreBoard matches={[]} />)

      screen.getByText('Matches')
    })

    it('should render a set of matches when matches passed to it', async () => {
      const mockMatches = [
        {
          homeTeamName: 'Team A',
          homeTeamScore: 1,
          awayTeamName: 'Team B',
          awayTeamScore: 2
        },
        {
          homeTeamName: 'Team Y',
          homeTeamScore: 3,
          awayTeamName: 'Team Z',
          awayTeamScore: 4
        }
      ]

      render(<ScoreBoard matches={mockMatches} />)
    })

    it.skip('should list a match after finish game', async () => {
      const user = userEvent.setup()

      const mockHandleFinish = vi.fn()

      render(<ScoreBoard matches={[]} onFinish={mockHandleFinish} />)

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

      screen.getByText('Peru 6')
      screen.getByText('Nigeria 3')
    })

    it.skip('should list matches after finish game', async () => {
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
      screen.getByText('Peru 7')
      screen.getByText('Nigeria 4')

      await user.type(homeTeamName, 'Netherlands')
      await user.type(homeTeamScore, '2')

      await user.type(awayTeamName, 'Argentina')
      await user.type(awayTeamScore, '2')

      await user.click(finishGameButton)

      screen.getByRole('row', { name: /Netherlands 2 Argentina 2/i })
    })
  })

  describe('Update score', () => {
    it.skip('should render an update button', () => {
      const mockMatches = [
        {
          homeTeamName: 'Team A',
          homeTeamScore: 1,
          awayTeamName: 'Team B',
          awayTeamScore: 2
        }
      ]

      render(<ScoreBoard matches={mockMatches} />)

      screen.getByText(/Update Scores/i);
    })

    it.skip('Receiving by pair score; home team score and way team score updates a game score', async () => {
    })
  })
})
