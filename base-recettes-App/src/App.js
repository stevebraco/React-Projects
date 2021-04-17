import React, { Component } from 'react'
// CSS
import './App.css'
import Admin from './components/Admin'
import Card from './components/Card'
import Header from './components/Header'
import recettes from './recettes'

//Firebase
import base from './base'

class App extends Component {
  state = {
    // Récupération du pseudo
    pseudo: this.props.match.params.pseudo,
    // Liste des recettes
    recettes: {},
  }

  componentDidMount() {
    console.log('DidMount enclenché');
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
    context: this,
    state: 'recettes'
    })
  }

  componentWillUnmount () {
    console.log('WillUnmount');
    base.removeBinding(this.ref)
  }

  //Ajout d'une recette
  addRecette = recette => {
    //Copie du tableau des recettes
    const recettes = {...this.state.recette}
    //Le nom de la recette en forme de tableau
    recettes[`recette-${Date.now()}`] = recette
    // Modification du state
    this.setState({ recettes })
  }

  
  majAddRecette = (key, newRecette) => {
    const recettes = {...this.state.recette}
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  deleteRecette = key => {
    const recettes = {...this.state.recette}
    recettes[key] = null
    this.setState({ recettes })
  }

  chargerExemple = () => this.setState({ recettes })

  render () {
    console.log(this.state.pseudo)
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details={this.state.recettes[key]} ></Card>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          {cards}
        </div>
        <Admin
        pseudo={this.state.pseudo}
        recettes={this.state.recettes}
        addRecette={this.addRecette}
        majAddRecette={this.majAddRecette}
        deleteRecette={this.deleteRecette}
        chargerExemple={this.chargerExemple}
        >

        </Admin>
      </div>
    )
  }
}

export default App
