import { useState } from 'react'

const Names = (props) => {
  let names = props.names
  
  if (props.filter != ""){
    var PATTERN = new RegExp(`${props.filter}`, "i")
    console.log(PATTERN)
    let newArray = names.filter(function (number) { return PATTERN.test(number.name); });
    return newArray.map((person) => <li key ={person.id}>{person.name} {person.number}</li>);
  }else{
    return names.map((person) => <li key ={person.id}>{person.name} {person.number}</li>);
  }
  

  
  
  
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
        <div>filter shown with<input onChange={handleFilterChange} /></div>
      <form>
        <h2>add a new</h2>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumerChange} value={newNumber}/>
          </div>
        <div>
          <button type="submit" onClick={addToPhonebook}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names names ={persons} filter={newFilter}/>
      <div>debug: {newFilter}</div>
    </div>
  )
}

export default App