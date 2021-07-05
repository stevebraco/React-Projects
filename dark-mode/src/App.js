import { useEffect, useState } from 'react';
import './App.css';
import { Article } from './componenets/Article';
import data from './data'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
    console.log(theme);
  }
  return theme
}




function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
    console.log(theme);
  }, [theme])
  return (
    <main className='main container'>
      <nav className='nav'>
        <div className="nav__center">
          <h1>Overreacted</h1>
          <button className='btn' onClick={toggleTheme} > toggle </button>
        </div>
      </nav>
      <section className="articles">
          { data.map((item) => {
            return <Article key={item.id} {...item} />
          }) }
      </section>
    </main>
  );
}

export default App;
