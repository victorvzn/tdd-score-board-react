import React from 'react'

import { ScoreBoardForm } from './ScoreBoardForm'

import { MatchList, MatchState } from './MatchList'
import { SummaryList } from './SummaryList'

import BaseTitle from './shared/BaseTitle'

import { useMatches } from '../hooks/useMatches'

import '../index.css'

export const ScoreBoard = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const { matchList, handleEndGame, handleUpdateMatch } = useMatches(matches)

  return (
    <>
      <BaseTitle>
        <h1>Score Board</h1>
      </BaseTitle>

      <ScoreBoardForm onEndGame={handleEndGame} />

      <MatchList matches={matchList} onSaveMatch={handleUpdateMatch} />

      <SummaryList matches={matchList} />
    </>
  )
}
