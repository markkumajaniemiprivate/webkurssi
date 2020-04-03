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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {bad + neutral + good}</p>
      <p>average {(good - bad) / (bad + neutral + good)}</p>
      <p>average {(good) / (bad + neutral + good) * 100} %</p>
    </div>
  )
}

const Button = ({ value, setValue, text }) => {
  return (
    <div>
      <button onClick={() => setValue(value + 1)} >
        {text}
      </button>
    </div>
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
