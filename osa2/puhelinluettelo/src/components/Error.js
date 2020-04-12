import React from 'react'

import '../index.css'

const Error = ({ error, setError }) => {

    console.log('error',error)


    if (error.length === 0) {
        return null
    }

    setTimeout(() => {
        setError([])
    }, 5000)

    return (
        <div className='error' >
            {error}
        </div>
    )
}

export default Error
