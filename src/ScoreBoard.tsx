import React, { useState } from 'react'

export interface MatchState {
  homeTeamName: string,
  homeTeamScore: number,
  awayTeamName: string,
  awayTeamScore: number
}

export interface Props {
  matches?: Array <MatchState>,
  handleEndGame?: (form: MatchState) => object
}

export const ScoreBoard: React.FC<Props> = ({ matches = [], handleEndGame = () => {} }): JSX.Element => {
  const DEFAULT_FORM = {
    homeTeamName: '',
    homeTeamScore: 0,
    awayTeamName: '',
    awayTeamScore: 0
  }

  const [matchList, setMatchList] = useState<Array<MatchState>>([])

  const [form, setForm] = useState<MatchState>(DEFAULT_FORM)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newForm = {
      ...form,
      homeTeamScore: Number(form.homeTeamScore),
      awayTeamScore: Number(form.awayTeamScore)
    }

    setMatchList([...matchList, newForm])

    setForm(DEFAULT_FORM)
    
    handleEndGame(newForm)
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

      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => {
            return (
              <tr key={index}>
                <td>
                  {`${match.homeTeamName} ${Number(match.homeTeamScore)}`}
                </td>
                <td>
                  {`${match.awayTeamName} ${Number(match.awayTeamScore)}`}
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

