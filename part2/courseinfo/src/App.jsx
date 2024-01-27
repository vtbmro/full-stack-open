const Header = ({ course }) => <h1>{course}</h1>

const sumOfParts = ( array ) => {
  const total = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0,
  );
  return total
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
  {props.courses.map(course => <div key={course.id}>
    <Header course={course.name}></Header>
    <Content parts={course.parts}></Content>
    <Total parts={course.parts}/> 
  </div>)}
  
</div>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses ={courses}/>
    </div>
  )
}

export default App