import { useEffect, useState } from "react";
import "./App.css";
import {FaUserAlt, FaEnvelopeOpen, FaRegCalendarAlt, FaRegMap, FaLock} from 'react-icons/fa'

function App() {
  const url = "https://randomuser.me/api";
  const imageDefault = "https://randomuser.me/api/portraits/men/64.jpg";
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const getPerson = async () => {
    const response = await fetch(url)
    const data = await response.json();
    const person = data.results[0]
    const {phone, email} = person
    const {first, last} = person.name
    const {age} = person.dob
    const {large: image} = person.picture
    const {login: {password}} = person
    const {street:{number, name}} = person.location

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`
    }

    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
    
  }
  useEffect(() => {
    getPerson()
  }, [])

  const handleValue = (e) => {
    if(e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      setTitle(newValue)
      setValue(person[newValue])
      console.log(person[newValue]);
    }
  };
  return (
    <div className="App">
      <h1>Profil</h1>
      <div className='profil'>
        <img className='profil__img' src={(person && person.image) || imageDefault} alt=""  />
        <p> my {title} is </p>
        <p> {value} </p>
        <div>
          <button className='icon' data-label="name" onMouseOver={handleValue}>
            <FaUserAlt/>
          </button>
          <button className='icon' data-label="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen/>
          </button>
          <button className='icon' data-label="age" onMouseOver={handleValue}>
            <FaRegCalendarAlt/>
          </button>
          <button className='icon' data-label="street" onMouseOver={handleValue}>
            <FaRegMap/>
          </button>
          <button className='icon' data-label="password" onMouseOver={handleValue}>
            <FaLock/>
          </button>
        </div>
          <button type='button' onClick={getPerson}>{loading ? 'loading...' : 'random user' }</button>
      </div>
    </div>
  );
}

export default App;
