import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav__center container">
<Link to='/' className='nav__link'>Logo</Link>
<ul className='nav__links'>
    <li className="nav__link">
        <Link to='/'>Home</Link>
    </li>
    <li className="nav__link">
        <Link to='/about'>About</Link>
    </li>
</ul>
            </div>
        </nav>
    )
}
