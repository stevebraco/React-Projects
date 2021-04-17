import React from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends React.Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    // Si goToApp est vrai redirection à cette URL
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <input
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder='Entrer votre nom'
            pattern='[A-Za-z-]{1,}'
            required />
          <button type='submit'>Entrer</button>
          {/* <p>Pas de caractères spéciaux.</p> */}
        </form>
      </div>
    )
  }
}

export default Connexion
