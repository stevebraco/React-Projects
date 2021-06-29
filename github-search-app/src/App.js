import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Events from './Events';

function App() {
  const [info, setInfo] = useState([])
  const [following, setFollowing] = useState('')
  const [events, setEvents] = useState('')
  const [query, setQuery] = useState('stevebraco')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.github.com/users/${query}`);
      setInfo(result.data)
      console.log(result.data);
    }

     const fetchFollowing = async () => {
       const result = await axios.get(`https://api.github.com/users/${query}/following`);
       console.log(result.data.length);
       setFollowing(result.data.length)
     }

     const fetchEvents = async () => {
       const result = await axios.get(`https://api.github.com/users/${query}/events`);
       console.log(result.data);
       setEvents(result.data)
     }

    

    fetchData()
    fetchFollowing()    
    fetchEvents()
  
  },[query])

  

  return (
    <div className="App">
      GITHUB

      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div>
        <p> {info.login} </p>
        <p> {info.location} </p>
        <img src={info.avatar_url} alt={info.login} />
        <p>{following} Following</p>
        {
          events.map(repos => (
            <Events repos={repos.repo} />
          ))
        }
       
      </div>
     
     
    </div>
  );
}

export default App;
