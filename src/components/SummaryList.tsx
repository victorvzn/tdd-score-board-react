import { MatchState } from './MatchList'

import { reverse } from '../utils/arrays'

import BaseTitleWithIcon from './shared/BaseTitleWithIcon'

export const SummaryList = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  const reversedMatches = reverse({ matches })

  return (
    <>
      <BaseTitleWithIcon title='Summary'>
        <span>⚽</span>
      </BaseTitleWithIcon>

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
