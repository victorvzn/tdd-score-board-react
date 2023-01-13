
import React from 'react'

import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import { MatchList } from './MatchList'

describe('<MatchList />', () => {
  afterEach(cleanup)

  it('should render title correctly', async () => {
    render(<MatchList />)

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

    render(<MatchList matches={mockMatches} />)
  })
})