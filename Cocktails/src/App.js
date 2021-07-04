import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route  path='/about' component={About}></Route>
      <Route  path='/cocktail/:id' component={SingleCocktail}></Route>
      <Route  path='/*' component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
