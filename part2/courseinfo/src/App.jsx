const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

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
        name: "Another part",
        exercises: 3,
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