import React from 'react'

const Persons = ({ persons, filter }) => {

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  console.log(personsToShow)


  return (
    <div>
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

export default Persons
