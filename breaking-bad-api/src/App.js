import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'


const App = () => {
  // Items : tableau vide
  const [ items, setItems ] = useState([])
  // Au chargement
  const [ isLoading, setIsLoading ] = useState(true)
  // Requête Search
  const [ query, setQuery ] = useState('')
  

  useEffect(() => {
    const fetchitems = async() => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      //Enregistrement des donnés dans items
      setItems(result.data);
      setIsLoading(false)

    }
    // Appelle de la fonction
    fetchitems()
    
  }, [query])

  // Stock la valeur searchValue dans query
  const stockInQuery = searchValue => {
    setQuery(searchValue)
  }


  return (
    <div className="container">
      <Header/>
      <Search getQuery={ stockInQuery } />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
