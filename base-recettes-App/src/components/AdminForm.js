import React from 'react'

const AdminForm = ({id: key, majAddRecette, recettes, deleteRecette}) => {
    const recette = recettes[key]

    const handleChange = (e, key) => {
        const {name , value} = e.target
        const recette = recettes[key]
        recette[name] = value
        majAddRecette(key, recette)
    }
    return (
        <div className='card'>
            <form  className="admin-form">
                <input value={recette.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="Nom de l'image" />
                <input value={recette.image}  onChange={e => handleChange(e, key)}type="text" name="image" placeholder="image" />
                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" placeholder="ingredients" rows="3"></textarea>
                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" placeholder="instructions" rows="15"></textarea>
            </form>
            <button onClick={() => deleteRecette(key)} >Supprimer</button>
        </div>
    )
}

export default AdminForm
