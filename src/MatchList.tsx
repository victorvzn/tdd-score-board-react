import { useState } from 'react'

export interface MatchState {
  id?: string
  homeTeamName?: string
  homeTeamScore: number
  awayTeamName?: string
  awayTeamScore: number
}

export const MatchList = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const [selectedMatch, setSelectedMatch] = useState<MatchState>()

  const handleUpdateScores = (match: MatchState): void => {
    if (selectedMatch === undefined) {
      setSelectedMatch(match)
      return
    }
    setSelectedMatch(undefined)
  }

  const handleSaveScores = (match: MatchState): void => {
  }

  return (
    <>
      <h2>Matches</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Home Team</th>
            <th>Score</th>
            <th>Away Team</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => {
            return (
              <tr key={match.id}>
                <td>{index + 1}</td>
                <td>
                  {match.homeTeamName}
                </td>
                <td>
                  {selectedMatch?.id !== match.id
                    ? <span>{match.homeTeamScore}</span>
                    : <input
                        readOnly
                        type='text'
                        name='updateHTScore'
                        placeholder='HT Score'
                        value={match.homeTeamScore}
                      />}
                </td>
                <td>
                  {match.awayTeamName}
                </td>
                <td>
                  {selectedMatch?.id !== match.id
                    ? <span>{match.awayTeamScore}</span>
                    : <input
                        readOnly
                        type='text'
                        name='updateATScore'
                        placeholder='AT Score'
                        value={match.awayTeamScore}
                      />}
                </td>
                <td>
                  {selectedMatch?.id !== match.id
                    ? <button onClick={() => handleUpdateScores(match)}>Update Scores</button>
                    : <button onClick={() => handleSaveScores(match)}>Save Scores</button>}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
