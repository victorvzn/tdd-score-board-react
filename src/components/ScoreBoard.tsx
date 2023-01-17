import React from 'react'

import { ScoreBoardForm } from './ScoreBoardForm'

import { MatchList, MatchState } from './MatchList'
import { SummaryList } from './SummaryList'

import { useMatches } from '../hooks/useMatches'

export const ScoreBoard = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const { matchList, handleEndGame, handleUpdateMatch } = useMatches(matches)

  return (
    <>
      <h1>Score Board</h1>

      <ScoreBoardForm onEndGame={handleEndGame} />

      <MatchList matches={matchList} onSaveMatch={handleUpdateMatch} />

      <SummaryList matches={matchList} />
    </>
  )
}
