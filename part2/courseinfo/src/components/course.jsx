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

export default Course