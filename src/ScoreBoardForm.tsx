import { useState } from 'react'

import { v4 as uuid } from 'uuid'

import { MatchState } from './MatchList'

export const ScoreBoardForm = ({ onEndGame }: { onEndGame: (match: MatchState) => void }): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: 0,
    awayTeamName: '',
    awayTeamScore: 0
  }

  const [form, setForm] = useState<MatchState>(DEFAULT_FORM)

  const [errorHomeTeamName, setErrorHomeTeamName] = useState('')
  const [errorAwayTeamName, setErrorAwayTeamName] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setErrorHomeTeamName('')
    setErrorAwayTeamName('')

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (form?.homeTeamName === '') {
      setErrorHomeTeamName('Home team name is required')
    }

    if (form?.awayTeamName === '') {
      setErrorAwayTeamName('Away team name is required')
    }

    if (form?.homeTeamName === '' || form?.awayTeamName === '') return

    const id = uuid()

    const newMatch: MatchState = {
      ...form,
      id,
      homeTeamScore: Number(form.homeTeamScore),
      awayTeamScore: Number(form.awayTeamScore)
    }

    setForm(DEFAULT_FORM)

    onEndGame(newMatch)
  }

  return (
    <>
      <h2>Start Game</h2>

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
          {errorHomeTeamName !== '' && <div className='is-required'>{errorHomeTeamName}</div>}
        </div>
        <div>
          <label htmlFor='homeTeamScore'>Home Team Score</label>
          <input
            type='number'
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
          {errorAwayTeamName !== '' && <div className='is-required'>{errorAwayTeamName}</div>}
        </div>
        <div>
          <label htmlFor='awayTeamScore'>Away Team Score</label>
          <input
            type='number'
            name='awayTeamScore'
            placeholder='Away Team Score'
            value={form.awayTeamScore}
            onChange={handleChange}
          />
        </div>
        <button>Finish Game</button>
      </form>
    </>
  )
}
