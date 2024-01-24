import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.function}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const Statistics = (props) => (
  <p>
    {props.text} {props.number}
  </p>
)





const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => {
    console.log("button clicked");
    console.log(`Good before: ${good}`);
    setGood(good + 1)
    console.log(`Good after: ${good}`);
  }
  
  const onNeutralClick = () => {
    console.log("button clicked");
    console.log(`Neutral before: ${neutral}`);
    setNeutral(neutral + 1)
    console.log(`Neutral after: ${neutral}`);
  }

  const onBadClick = () => {
    console.log("button clicked");
    console.log(`Bad before: ${bad}`);
    setBad(bad + 1)
    console.log(`bad after: ${bad}`);
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" function={onGoodClick}/>
      <Button text="neutral" function={onNeutralClick}/>
      <Button text="bad" function={onBadClick}/>
      <Header text="statistics"/>
      <Statistics text="good" number={good} />
      <Statistics text="neutral" number={neutral} />
      <Statistics text="bad" number={bad} />
    </div>
  )
}

export default App