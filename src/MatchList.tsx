import { useState } from 'react'

export interface MatchState {
  id?: string
  homeTeamName?: string
  homeTeamScore: number
  awayTeamName?: string
  awayTeamScore: number
}

export const MatchList = ({
  matches,
  onSaveMatch
}: {
  matches: MatchState[]
  onSaveMatch: (match: MatchState) => void
}): JSX.Element => {
  const DEFAULT_INPUTS = {
    homeTeamScore: 0,
    awayTeamScore: 0
  }

  const [selectedMatch, setSelectedMatch] = useState<MatchState>()
  const [inputValues, setInputValues] = useState<MatchState>(DEFAULT_INPUTS)

  const handleUpdateScores = (match: MatchState): void => {
    setSelectedMatch(match)

    setInputValues({
      homeTeamScore: match.homeTeamScore,
      awayTeamScore: match.awayTeamScore
    })
  }

  const handleSaveScores = (match: MatchState): void => {
    setSelectedMatch(undefined)

    const updatedMatch: MatchState = {
      ...match,
      homeTeamScore: Number(inputValues.homeTeamScore),
      awayTeamScore: Number(inputValues.awayTeamScore)
    }
    console.log(updatedMatch)

    onSaveMatch(updatedMatch)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setInputValues({ ...inputValues, [name]: value })
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
                        type='text'
                        name='homeTeamScore'
                        placeholder='HT Score'
                        value={inputValues.homeTeamScore}
                        onChange={handleChange}
                      />}
                </td>
                <td>
                  {match.awayTeamName}
                </td>
                <td>
                  {selectedMatch?.id !== match.id
                    ? <span>{match.awayTeamScore}</span>
                    : <input
                        type='text'
                        name='awayTeamScore'
                        placeholder='AT Score'
                        value={inputValues.awayTeamScore}
                        onChange={handleChange}
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
