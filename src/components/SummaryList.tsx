import { MatchState } from './MatchList'

import { reverse } from '../utils/arrays'

export const SummaryList = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const reversedMatches = reverse({ matches })

  return (
    <>
      <h1>Summary</h1>

      <ul>
        {reversedMatches.length > 0 && reversedMatches.map(m => (
          <li key={m.id}>
            {m.homeTeamName} {m.homeTeamScore} - {m.awayTeamName} {m.awayTeamScore}
          </li>
        ))}
      </ul>
    </>
  )
}
