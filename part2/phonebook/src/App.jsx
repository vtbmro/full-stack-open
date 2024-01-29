import { useState } from 'react'

const Names = (props) => {
  let names = props.names

  return names.map((person) => <li key ={person.id}>{person.name}</li>);
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      id: persons.length += 1
    }
    
    setPersons(persons.concat(nameObject))

    console.log(persons)

    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names names ={persons}/>
      
      
    </div>
  )
}

export default App