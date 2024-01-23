const Header = (props) => {
  console.log(props)
  return (
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part[0].name} {props.part[0].exercises}</p>
      <p>{props.part[1].name} {props.part[1].exercises}</p>
      <p>{props.part[2].name} {props.part[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
  <p>Number of exercises {props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part = {parts} />
      <Total exercise={parts} />
    </div>
  )
}

export default App