import React from 'react'

const ShowCountry = ({ countries }) => {

  if (countries.length === 1) {
    return (
      <div>
        {
          countries.map((country) =>
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
            </div>)

        }
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
          </div>)
      }
    </div>
  )

}

const Countries = ({ countries, filter }) => {

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <ShowCountry countries={countriesToShow} />
    </div>
  )

}

export default Countries
