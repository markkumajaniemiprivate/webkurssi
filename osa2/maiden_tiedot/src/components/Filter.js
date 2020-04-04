import React from 'react'

const Filter = ({ filter, setFilter, countries, setCountriesToShow }) => {
  console.log('Filter', filter)

  const handleFilter = (event) => {
    console.log('filter',filter)
    let new_filter = event.target.value
    let new_countries = countries.filter(country => country.name.toLowerCase().includes(new_filter.toLowerCase()))
    setFilter(new_filter)
    setCountriesToShow(new_countries)
  }

  return (
    <div>
      find countries 
      <input
        value={filter}
        onChange={handleFilter}
      />
    </div>
  )

}

export default Filter
