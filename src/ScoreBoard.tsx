import React, { useState } from 'react'

import { ScoreBoardForm } from './ScoreBoardForm'

import { MatchList, MatchState } from './MatchList'
import { SummaryList } from './SummaryList'

export const ScoreBoard = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const [matchList, setMatchList] = useState<MatchState[]>(matches)

  const handleEndGame = (match: MatchState): void => {
    setMatchList([...matchList, match])
  }

  const handleUpdateMatch = (match: MatchState): void => {
    const updatedMatches = matchList.map(matchOrigin => {
      if (matchOrigin.id === match.id) return match

      return matchOrigin
    })
    setMatchList(updatedMatches)
  }

  return (
    <>
      <h1>Score Board</h1>

      <ScoreBoardForm onEndGame={handleEndGame} />

      <MatchList matches={matchList} onSaveMatch={handleUpdateMatch} />

      <SummaryList matches={matchList} />
    </>
  )
}
