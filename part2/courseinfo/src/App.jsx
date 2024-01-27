const Header = ({ course }) => <h1>{course}</h1>

const sumOfParts = ( array ) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i].exercises
  }
  return sum
}

const Total = ({ parts }) => <strong>Number of exercises {sumOfParts(parts)}</strong>

const Part = ({ part }) => 
  <>
    {part.name} {part.exercises}
  </>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <p key={part.id}><Part part = {part}/></p>)}   
  </>


const Course = ( props ) => 
<div>
  <Header course={props.course.name}></Header>
  <Content parts={props.course.parts}></Content>
  <Total parts={props.course.parts}/> 
</div>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course ={course}/>
    </div>
  )
}

export default App