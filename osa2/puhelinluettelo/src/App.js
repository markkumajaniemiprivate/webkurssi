import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import Notif from './components/Notif'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notif, setNotif] = useState([])
  const [error,setError] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  return (
    <div>
      <h2>Phonebook</h2>
      <Error error={error} setError={setError} />
      <Notif notif={notif} setNotif={setNotif} />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} 
      setNotif={setNotif}  setError={setError}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter} setNotif={setNotif} setError={setError} />
    </div>
  )

}

export default App
