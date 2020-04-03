import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tr>
          <td>good</td>
          <td> {good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td> {neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td> {bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td> {bad + neutral + good}</td>
        </tr>
        <tr>
          <td>average</td>
          <td> {(good - bad) / (bad + neutral + good)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td> {(good) / (bad + neutral + good) * 100} %</td>
        </tr>
      </table>
    </div>
  )
}

const Button = ({ value, setValue, text }) => {
  return (
    <button onClick={() => setValue(value + 1)} >
      {text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} setValue={setGood} text={'good'} />
      <Button value={neutral} setValue={setNeutral} text={'neutral'} />
      <Button value={bad} setValue={setBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
