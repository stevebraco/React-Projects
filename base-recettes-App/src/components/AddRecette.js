import React, { Component } from 'react'

class AddRecette extends Component {

    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const recette = {...this.state}
        this.props.addRecette(recette)

        // Reset
        Object.keys(recette).forEach(item => {
             recette[item] =  '' })

             this.setState({ ...recette })

             console.log(recette);

        }
    

    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit} >
                    <input value={this.state.nom} onChange={this.handleChange}  name="nom" type="text" placeholder='nom de la recette' />
                    <input value={this.state.image} onChange={this.handleChange}  name="image" type="text" placeholder="nom de l'image" />
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" id=""  rows="3" placeholder='Ingrédients' ></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" id=""  rows="15" placeholder='Instructions' ></textarea>
                    <button type='submit'>Ajouter une recette</button>
                </form>
            </div>
        )
    }
}

export default AddRecette
