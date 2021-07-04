import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <section className='section error'>
            <div className="error__container">
                <h1 className='section__title'> Oops ! Error 404 </h1>
            <Link to='/'>Back Home</Link>
            </div>
        </section>
    )
}

export default Error
