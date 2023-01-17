
import React from 'react'

import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

import { MatchList } from './MatchList'

describe('<MatchList />', () => {
  afterEach(cleanup)

  it('should render title correctly', async () => {
    render(<MatchList matches={[]} />)

    screen.getByText('Matches')
  })

  it('should render a set of matches when matches passed to it', async () => {
    const mockMatches = [
      {
        id: 'uuid-1',
        homeTeamName: 'Team A',
        homeTeamScore: 1,
        awayTeamName: 'Team B',
        awayTeamScore: 2
      },
      {
        id: 'uuid-2',
        homeTeamName: 'Team Y',
        homeTeamScore: 3,
        awayTeamName: 'Team Z',
        awayTeamScore: 4
      }
    ]

    render(<MatchList matches={mockMatches} />)
  })

  it('should render an update button', () => {
    const mockMatches = [
      {
        id: 'uuid-1',
        homeTeamName: 'Team A',
        homeTeamScore: 1,
        awayTeamName: 'Team B',
        awayTeamScore: 2
      }
    ]

    render(<MatchList matches={mockMatches} />)

    expect(screen.getByText(/Update Scores/i)).toBeInTheDocument()
})

  it('should toggle home team score, way team score inputs and a save button after update score button clicked', async () => {
    const user = userEvent.setup()

    const mockMatches = [
      {
        id: 'uuid-1',
        homeTeamName: 'Team P',
        homeTeamScore: 5,
        awayTeamName: 'Team S',
        awayTeamScore: 3
      }
    ]

    render(<MatchList matches={mockMatches} />)

    const updateScoresButton: HTMLButtonElement = screen.getByText('Update Scores')
    // const row = screen.getByRole('row', { name: /Team P 5 Team S 3/i })
    // const updateScoresButton = within(row).getByText('Update Scores')

    expect(screen.queryByPlaceholderText('HT Score')).not.toBeInTheDocument()
    expect(screen.queryByPlaceholderText('AT Score')).not.toBeInTheDocument()

    await user.click(updateScoresButton)

    expect(screen.getByPlaceholderText('HT Score')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('AT Score')).toBeInTheDocument()

    expect(screen.getByText('Save Scores')).toBeInTheDocument()
  })

  it('should toggle home team score and way team score inputs only once after update button clicked', async () => {
    const user = userEvent.setup()

    const mockMatches = [
      {
        id: 'uuid-1',
        homeTeamName: 'Team P',
        homeTeamScore: 5,
        awayTeamName: 'Team S',
        awayTeamScore: 3
      },
      {
        id: 'uuid-2',
        homeTeamName: 'Team X',
        homeTeamScore: 5,
        awayTeamName: 'Team W',
        awayTeamScore: 3
      }
    ]

    render(<MatchList matches={mockMatches} />)

    // const updateScoresButton: HTMLButtonElement = screen.getByText('Update Scores')
    const row = screen.getByRole('row', { name: /Team X 5 Team W 3/i })
    const updateScoresButton = within(row).getByText('Update Scores')

    expect(screen.queryByPlaceholderText('HT Score')).not.toBeInTheDocument()
    expect(screen.queryByPlaceholderText('AT Score')).not.toBeInTheDocument()

    await user.click(updateScoresButton)
    screen.debug()

    expect(screen.getByPlaceholderText('HT Score')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('AT Score')).toBeInTheDocument()

    expect(screen.getByText('Save Scores')).toBeInTheDocument()
  })

  it('should hide home team score and way team score inputs with scores value after save button clicked', async () => {
    const user = userEvent.setup()

    const mockMatches = [
      {
        id: 'uuid-1',
        homeTeamName: 'Team P',
        homeTeamScore: 5,
        awayTeamName: 'Team S',
        awayTeamScore: 3
      },
      {
        id: 'uuid-2',
        homeTeamName: 'Team X',
        homeTeamScore: 5,
        awayTeamName: 'Team W',
        awayTeamScore: 3
      }
    ]

    render(<MatchList matches={mockMatches} />)

    // const updateScoresButton: HTMLButtonElement = screen.getByText('Update Scores')
    const row = screen.getByRole('row', { name: /Team X 5 Team W 3/i })
    const updateScoresButton = within(row).getByText('Update Scores')

    await user.click(updateScoresButton)

    expect(within(row).getByPlaceholderText('HT Score')).toBeInTheDocument()
    expect(within(row).getByPlaceholderText('AT Score')).toBeInTheDocument()
    expect(within(row).getByText('Save Scores')).toBeInTheDocument()

    await user.click(within(row).getByText('Save Scores'))

    expect(within(row).queryByPlaceholderText('HT Score')).not.toBeInTheDocument()
    expect(within(row).queryByPlaceholderText('AT Score')).not.toBeInTheDocument()
    expect(updateScoresButton).toBeInTheDocument()
  })

