import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
//import PersonForm from './components/PersonForm'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Country data</h2>
      <Filter filter={filter} setFilter={setFilter} countries={countries} setCountriesToShow={setCountriesToShow} />
      <Countries countries={countriesToShow} setCountriesToShow={setCountriesToShow} />
    </div>
  )

}

export default App
