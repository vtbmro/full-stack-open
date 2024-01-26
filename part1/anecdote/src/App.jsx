import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [index, setIndex] = useState(0)
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const biggestValue = (points) =>{

    let max_value = 0;
    let index_of_higest_value = 0;

    for (let i = 0; i < points.length; i++)
      if (points[i] > max_value){
        max_value = points [i]
        index_of_higest_value = i
      }

    return index_of_higest_value
  }

  const random_anecdote = () => {
    const random_number = getRandomInt(anecdotes.length)
    setSelected(random_number)
  }

  const handleVote = (index) =>{
    const nextPoints = points.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setPoints(nextPoints);
    setIndex(biggestValue(nextPoints))
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={random_anecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      
    </div>
  )  
}

export default App