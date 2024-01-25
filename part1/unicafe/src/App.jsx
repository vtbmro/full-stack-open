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

const Values = (props) => (
  <p>
    {props.text} {props.number}
  </p>
)

const Statistics = (props) => {
  if (props.total === 0){
    return (
      <div>
        No feedback given
      </div>)
  }else{
    return(
    <div>
      <Values text="good" number={props.good} />
      <Values text="neutral" number={props.neutral} />
      <Values text="bad" number={props.bad} />
      <Values text="total" number={props.total} />
      <Values text="average" number={props.average} />
      <Values text="positive" number={props.percentagePositive}/>
    </div>)
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const onGoodClick = () => {
    const updatedGood = good + 1 
    setGood(updatedGood)
    const updateTotal = total + 1
    setTotal(updateTotal)
  }

  const onNeutralClick = () => {
    const updatedNeutral = neutral + 1 
    setNeutral(updatedNeutral)
    const updateTotal = total + 1
    setTotal(updateTotal)
  }

  const onBadClick = () => {
    const updatedBad = bad + 1 
    setBad(updatedBad)
    const updateTotal = total + 1
    setTotal(updateTotal)
  }

  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const percentagePositive = `${(100 * good) / total} %`
  
  return (
    <div>
      <Header text="give feedback"/>

      <Button text="good" function={onGoodClick}/>
      <Button text="neutral" function={onNeutralClick}/>
      <Button text="bad" function={onBadClick}/>

      <Header text="statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} percentagePositive={percentagePositive}  />

    </div>
  )
}

export default App