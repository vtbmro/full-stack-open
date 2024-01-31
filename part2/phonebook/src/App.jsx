import { useState, useEffect } from 'react'
import personsService from './services/persons'


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
    return names.map((person) => <li key ={person.id}>{person.name} {person.number}<button onClick={() => personsService.deletePerson(person.id)}>delete</button></li>);
  }
}

const App = () => {

  
// Initiating states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
// Initiating states

// onChange handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumerChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
// onChange handlers

// we have to UseEffect unless rerenders for ever

useEffect(() => {
  personsService
    .getAll()
    .then(response => {
      
      setPersons(response.data)
    })
    
  }, [])  

// Add to phonebook except if already in phonebook (working as intended)
  const addToPhonebook = (event) => {
    event.preventDefault()
    if (persons.filter((name) => name.name == newName).length != 0){
      alert(`${newName} is already added to phonebook.`)

    }else{
      const nameObject = {
        name: newName,
        id: `${persons.length}`,
        number: newNumber
      }
      personsService.create(nameObject)
      personsService
        .getAll()
        .then(response => {
          setPersons(response.data)
        })
    }
  }
  // Add to phonebook except if already in phonebook

  
  
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