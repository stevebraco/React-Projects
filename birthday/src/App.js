import React, { useState } from 'react';
import './App.css'
import data from './Data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data)


  const handleClick = () => {
    setPeople([])
  }
  
  const handleDelete = id => {
     const peoples = [...people]
     const index = peoples.findIndex( people => people.id === id )
     peoples.splice(index, 1)
     setPeople( peoples )
    console.log(id);
    
    
  }
  

  return (
  <main>
    <section className='container'>
      <h3>{people.length} Birthdays today</h3>
      <List 
      people={people}  
      onDelete={handleDelete} />
      <button onClick={ handleClick }> Clear All </button>
    </section>
  </main>
  )
}

export default App;