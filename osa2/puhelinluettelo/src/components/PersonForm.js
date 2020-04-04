import React from 'react'

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
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
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
