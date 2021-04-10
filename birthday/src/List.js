import React from 'react'
import { ImCross } from 'react-icons/im';


const List = ({ people, onDelete }) => {

    

    return (
        <>
            { people.map(person => {
                const { id, name, age, image } = person;
                return <article key={id} className='person' >
                    <img src={image} alt={name} />
                    <div className="test">
                    <div>
                        <h4> {name} </h4>
                        <p> {age} years </p>
                    </div>
                    <div >
                        <button onClick={(index) => onDelete(id)} className='icon'>
                    <ImCross />
                        </button>

                    </div>
                    </div>
                    
                </article>
            }) }  
        </>
    )
}

export default List
