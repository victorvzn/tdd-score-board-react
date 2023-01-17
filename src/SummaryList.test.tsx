
import React from 'react'

import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

import { SummaryList } from './SummaryList'
import { MatchState } from './MatchList'

import { reverse } from './utils/arrays'

describe('<SummaryList />', () => {
  afterEach(cleanup)

  it('should render title correctly', async () => {
    render(<SummaryList matches={[]} />)

    expect(screen.getByText('Summary')).toBeInTheDocument()
  })

  it('should be returned ordered by the most recently added', async () => {
    const mockMatches: MatchState[] = [
      { id: 'uuid-1', homeTeamName: 'Mexico', homeTeamScore: 0, awayTeamName: 'Canada', awayTeamScore: 5 },
      { id: 'uuid-2', homeTeamName: 'Spain', homeTeamScore: 10, awayTeamName: 'Brazil', awayTeamScore: 2 },
      { id: 'uuid-3', homeTeamName: 'Germany', homeTeamScore: 2, awayTeamName: 'France', awayTeamScore: 2 },
      { id: 'uuid-4', homeTeamName: 'Uruguay', homeTeamScore: 6, awayTeamName: 'Italy', awayTeamScore: 6 },
      { id: 'uuid-5', homeTeamName: 'Germany', homeTeamScore: 3, awayTeamName: 'France', awayTeamScore: 1 }
    ]

    const reversedMatches = reverse({ matches: mockMatches })

    render(<SummaryList matches={mockMatches} />)

    const items = screen.getAllByRole('listitem')

    reversedMatches.forEach((m, i) => {
      const text = `${m.homeTeamName} ${m.homeTeamScore} - ${m.awayTeamName} ${m.awayTeamScore}`
      expect(within(items[i]).queryByText(text)).toBeInTheDocument()
    })
  })
})
