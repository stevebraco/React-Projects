import React from 'react'

const Events = (repos) => {
    const test = repos.repos.name.split('/')
    return (
        <div>
            <p> {test[1]} </p>
        </div>
    )
}

export default Events
