import React from 'react'

const Header = ({ pseudo }) => {

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

    return (
        <header>
            <h1> Bienvenue {pseudo} </h1>
        </header>
    )
}

export default Header
