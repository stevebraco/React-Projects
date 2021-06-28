import React, { useState } from 'react';
import './App.css'
import data from './Data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data)


  const handleClick = () => {
    setPeople([])
  }
  
  /*
  La méthode findIndex() renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux 
  pour tous les éléments du tableau, le résultat vaut -1.
  */
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
