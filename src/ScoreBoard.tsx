import React, { useState } from 'react'

interface MatchState {
  homeTeamName: string,
  homeTeamScore: number,
  awayTeamName: string,
  awayTeamScore: number
}

const ScoreBoard = (): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: 0,
    awayTeamName: '',
    awayTeamScore: 0
  }

  const [matches, setMatches] = useState<Array<MatchState>>([])

  const [form, setForm] = useState<MatchState>(DEFAULT_FORM)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setMatches([...matches, form])

    setForm(DEFAULT_FORM)
  }

  return (
    <>
      <h1>Score Board</h1>

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

      <h2>Matches</h2>

      <ul>
        {matches.map((match, index) => {
          const scores = `${match.homeTeamName} ${Number(match.homeTeamScore)} - ${match.awayTeamName} ${Number(match.awayTeamScore)}`
          return (
            <li key={index}>{scores}</li>
          )
        })}
      </ul>
    </>
  )
}

export default ScoreBoard
