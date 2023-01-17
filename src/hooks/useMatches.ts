import { useState } from 'react'
import { MatchState } from '../components/MatchList'

export const useMatches = (items: MatchState[]) => {
  const [matchList, setMatchList] = useState<MatchState[]>(items)

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

  return {
    matchList,
    handleEndGame,
    handleUpdateMatch
  }
}
