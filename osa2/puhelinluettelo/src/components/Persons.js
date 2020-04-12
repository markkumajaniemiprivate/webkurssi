import React from 'react'
import personService from '../services/persons'

const Persons = ({ persons, setPersons, filter, setNotif, setError }) => {

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  console.log(personsToShow)

  //https://stackoverflow.com/questions/51042381/react-how-to-pass-an-argument-to-an-event-handler
  const removePerson = (event) => {
    event.preventDefault()
    console.log('delete', event.target.dataset.key)

    if (window.confirm(`Delete ${event.target.dataset.key} ?`)) {
      let person_to_remove = persons.find(person => person.name === event.target.dataset.key)
      personService.remove(person_to_remove)
        .then(() => {
          console.log('deleted', person_to_remove)
          setNotif(`Deleted ${person_to_remove.name}`)
          personService.getAll().then(data => {
            setPersons(data)
          })
        })
        .catch(() => {
          setError(`Information of ${person_to_remove.name} is already removed from the server`)
          personService.getAll().then(data => setPersons(data))
        })
    }
  }

  return (
    <div>
      {
        personsToShow.map((person) =>
          <div key={person.name} >
            {console.log(person.name)}
            {person.name} {person.number}
            <button type="button" data-key={person.name} onClick={removePerson} >Delete</button>
          </div>)
      }
    </div>
  )

}

export default Persons
