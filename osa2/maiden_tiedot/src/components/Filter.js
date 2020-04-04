import React from 'react'

const Filter = ({ filter, setFilter }) => {
  console.log('Filter', filter)

  const handleFilter = (event) => {
    console.log('filter')
    setFilter(event.target.value)
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
