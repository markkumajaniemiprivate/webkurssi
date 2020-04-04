import React from 'react'

const ShowCountry = ({ country }) => {

  return (
    <div key={country.name} >
      <h1> {country.name} </h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      {country.languages.map((language) =>
        <div key={language.name} >
          <li> {language.name} </li>
        </div>
      )}
      <p>  </p>
      <img src={country.flag} alt='flag' height='50' ></img>
    </div>
  )
}

const SelectCountry = ({ countries, setCountriesToShow }) => {

  //https://stackoverflow.com/questions/51042381/react-how-to-pass-an-argument-to-an-event-handler
  const showFromButton = (event) => {
    event.preventDefault()
    console.log('show', event.target.dataset.key)
    let new_filter = event.target.dataset.key
    let new_countries = countries.filter(country => country.name.toLowerCase().includes(new_filter.toLowerCase()))
    setCountriesToShow(new_countries)
  }

  if (countries.length === 1) {
    return (
      <div>
        {
          countries.map((country) =>
            <ShowCountry key={country.name} country={country} />
          )}
      </div>
    )
  }

  if (countries.length > 10) {
    return (
      <div>
        Too many matches. Specify another filter.
      </div>
    )
  }

  return (
    <div>
      {
        countries.map((country) =>
          <div key={country.name} >
            {country.name}
            <button type="button" data-key={country.name} onClick={showFromButton} >Show</button>
          </div>)
      }
    </div>
  )

}

const Countries = ({ countries, setCountriesToShow }) => {

  return (
    <div>
      <SelectCountry countries={countries} setCountriesToShow={setCountriesToShow} />
    </div>
  )

}

export default Countries
