import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewName = (event) => {
    console.log('new name')
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log('new number')
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log('filter')
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('submit')
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  console.log(personsToShow)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <form onSubmit={addName} >
        <div>
          name:
          <input
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        personsToShow.map((person) =>
          <div key={person.name} >
            {console.log(person.name)}
            {person.name} {person.number}
          </div>)
      }
    </div>
  )

}

export default App
