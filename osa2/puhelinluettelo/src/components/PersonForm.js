import React from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

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
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        console.log('addName', {name: newName})
        const person_to_replace = persons.find((person) => person.name === newName)
        personService.update(person_to_replace, newNumber).then(() => personService.getAll().then(data => setPersons(data)))
      }
    }
    else {
      personService.create({ name: newName, number: newNumber }).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }


  return (
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
  )

}

export default PersonForm
