import React, { useState } from 'react'

import { ScoreBoardForm } from './ScoreBoardForm'

import { MatchList, MatchState } from './MatchList'

export const ScoreBoard = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const [matchList, setMatchList] = useState<MatchState[]>(matches)

  const handleEndGame = (match: MatchState): void => {
    setMatchList([...matchList, match])
  }

  return (
    <>
      <h1>Score Board</h1>

      <h2>Start Game</h2>

      <ScoreBoardForm onEndGame={handleEndGame} />

      <MatchList matches={matchList} />
    </>
  )
}
