import { MatchState } from '../components/MatchList'

export const reverse = ({ matches }: { matches: MatchState[] }): MatchState[] => matches.slice().reverse()
