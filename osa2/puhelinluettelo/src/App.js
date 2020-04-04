import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123 4567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    console.log('new name')
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log('new number')
    setNewNumber(event.target.value)
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        persons.map((person) =>
          <div key={person.name} >
            {person.name} {person.number}
          </div>)
      }
    </div>
  )

}

export default App
