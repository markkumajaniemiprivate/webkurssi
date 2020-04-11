import React from 'react'

import '../index.css'

const Notif = ({ notif, setNotif }) => {

    console.log('notif', notif)


    if (notif.length === 0) {
        return null
    }

    setTimeout(() => {
        setNotif([])
    }, 5000)

    return (
        <div className='notif' >
            {notif}
        </div>
    )
}

export default Notif
