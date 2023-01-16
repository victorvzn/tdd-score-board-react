import { useState } from 'react'

import { MatchState } from './MatchList'

export const ScoreBoardForm = ({ onEndGame }: { onEndGame: (match: MatchState) => void }): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: 0,
    awayTeamName: '',
    awayTeamScore: 0
  }

  const [form, setForm] = useState<MatchState>(DEFAULT_FORM)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const newMatch: MatchState = {
      ...form,
      homeTeamScore: Number(form.homeTeamScore),
      awayTeamScore: Number(form.awayTeamScore)
    }

    setForm(DEFAULT_FORM)

    onEndGame(newMatch)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='homeTeamName'>Home Team Name</label>
        <input
          type='text'
          name='homeTeamName'
          placeholder='Home Team Name'
          value={form.homeTeamName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='homeTeamScore'>Home Team Score</label>
        <input
          type='text'
          name='homeTeamScore'
          placeholder='Home Team Score'
          value={form.homeTeamScore}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='awayTeamName'>Away Team Name</label>
        <input
          type='text'
          name='awayTeamName'
          placeholder='Away Team Name'
          value={form.awayTeamName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='awayTeamScore'>Away Team Score</label>
        <input
          type='text'
          name='awayTeamScore'
          placeholder='Away Team Score'
          value={form.awayTeamScore}
          onChange={handleChange}
        />
      </div>
      <button>Finish Game</button>
    </form>
  )
}
