export interface MatchState {
  homeTeamName: string,
  homeTeamScore: number,
  awayTeamName: string,
  awayTeamScore: number
}

interface Props {
  matches?: Array<MatchState>
}

export const MatchList: React.FC<Props> = ({ matches = [] }): JSX.Element => {
  return (
    <>
      <h2>Matches</h2>

      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Score</th>
            <th>Away Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => {
            return (
              <tr key={index}>
                <td>
                  {match.homeTeamName}
                </td>
                <td>
                  ${match.homeTeamScore}
                </td>
                <td>
                  {match.awayTeamName}
                </td>
                <td>
                  {Number(match.awayTeamScore)}
                </td>
                <td>
                  <button>Update Scores</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
