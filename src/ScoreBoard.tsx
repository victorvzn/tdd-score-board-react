import { useState } from 'react'

const ScoreBoard = (): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: '0',
    awayTeamName: '',
    awayTeamScore: '0'
  }

  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setForm(DEFAULT_FORM)
  }

  return (
    <>
      <h1>Score Board</h1>
      <h2>Start Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='homeTeamName'
          placeholder='Home Team Name'
          value={form.homeTeamName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='homeTeamScore'
          placeholder='Home Team Score'
          value={form.homeTeamScore}
          onChange={handleChange}
        />
        <input
          type='text'
          name='awayTeamName'
          placeholder='Away Team Name'
          value={form.awayTeamName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='awayTeamScore'
          placeholder='Away Team Score'
          value={form.awayTeamScore}
          onChange={handleChange}
        />
        <button>Finish Game</button>
      </form>
    </>
  )
}

export default ScoreBoard
