import { MatchState } from '../MatchList'

export const reverse = ({ matches }: { matches: MatchState[] }): MatchState[] => matches.slice().reverse()
