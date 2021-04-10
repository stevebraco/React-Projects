import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    // Text dans input
    const [text, setText] = useState('');

    // Enregistre searchValue dans Text et dans la fonction getQuery
    const handleChange = (e, searchValue) => {
        searchValue = e.target.value
        // searchValue représente le text input
        console.log("searchValue", searchValue);
        console.log("text", text);
        setText(searchValue)
        getQuery(searchValue)
    }

    return (
        <section className='search'>
            <form action="">
                <input 
                type="text" 
                value={text}
                onChange={ handleChange }
                className='form-control'
                placeholder="Seach characters"
                autoFocus
                />                
            </form>
            
        </section>
    )
}

export default Search
