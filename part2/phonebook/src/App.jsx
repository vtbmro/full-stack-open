import { useState } from 'react'


// Components 

const Filter = (props) => {
  return (<>filter shown with<input onChange={props.change} value={props.value}/></>)
}

const PersonForm = (props) => {
  return (
  <div>
    <form>
      <div>
        name: <input onChange={props.handleNameChange} value={props.newName}/>
      </div>
      <div>
        number: <input onChange={props.handleNumerChange} value={props.newNumber}/>
        </div>
    <div>
      <button type="submit" onClick={props.addToPhonebook}>add</button>
    </div>
  </form></div>)
}



const Persons = (props) => {
  let names = props.names
  
  if (props.filter != ""){
    var PATTERN = new RegExp(`${props.filter}`, "i")
    let newArray = names.filter(function (number) { return PATTERN.test(number.name); });
    return newArray.map((person) => <li key ={person.id}>{person.name} {person.number}</li>);
  }else{
    return names.map((person) => <li key ={person.id}>{person.name} {person.number}</li>);
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumerChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


  const addToPhonebook = (event) => {
    event.preventDefault()
    if (persons.filter((name) => name.name == newName).length != 0){
      alert(`${newName} is already added to phonebook `)

    }else{
      const nameObject = {
        name: newName,
        id: persons.length,
        number: newNumber
      }

      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
  <div>
    <h2>Phonebook</h2>
    <Filter change={handleFilterChange} value={newFilter}/>

  
    <h3>add a new</h3>
    <PersonForm handleNameChange={handleNameChange} newName={newName} handleNumerChange={handleNumerChange}
    newNumber={newNumber} addToPhonebook={addToPhonebook}/>
    
    
    <h2>Numbers</h2>
    <Persons names ={persons} filter={newFilter}/>
  
  </div>
  )
}

export default App